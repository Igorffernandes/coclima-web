import BaseModal from 'components/BaseModal';
import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import {useDropzone} from 'react-dropzone';
import {uploadPhoto} from 'services/archives';

const ArchiveModal = ({visible, onClose}) => {
  const [archive, setArchive] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
			reader.onload = () => {
        setArchive(reader.result)
				}
    })
    
  }, [])

  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop})

  const createArquive = async (company_id = 1) => {
    try{
      const newArchive = {
        data: archive,
        type: 'pdf',
        company_id: company_id,
        name: acceptedFiles[0].path,
        keywords: 'archive'
      }
      await uploadPhoto(newArchive);
    } catch(err){
      console.log(err);
    } 
  }

	function handleButton(){
      createArquive();
      onClose();
	}

  return  <BaseModal 
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>{acceptedFiles.length > 0 ? 'Arquivos enviados':'Envie seu arquivo'}</Styled.TextTitle>
                {acceptedFiles.length === 0 ? 
                (
                  <Styled.ArchiveBox {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <Styled.FileIcon />
                    <Styled.TextBody>
                      Arraste e solte seus arquivos aqui
                    </Styled.TextBody>
                  </Styled.ArchiveBox>
                ) : 
                (
                  acceptedFiles.map(file => (
                    <Styled.ViewItem>
                      <Styled.FileItemIcon />
                      <Styled.TextItem>
                        {file.path}
                      </Styled.TextItem>
                      <Styled.FileItemTrash />
                    </Styled.ViewItem>
                    )
                  )
                )}
              </Styled.ViewContainer>
              {acceptedFiles.length > 0 ? 
              (
                <Styled.ViewButton onClick={handleButton}>
                  <Styled.TextButton>
                    CONFIRMAR ENVIO
                  </Styled.TextButton>
                </Styled.ViewButton>
              )
              :
              (
                <Styled.ViewButton {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <Styled.TextButton>
                    PROCURAR NO COMPUTADOR
                  </Styled.TextButton>
                </Styled.ViewButton>
              )
              }
          </BaseModal>
}

ArchiveModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  }

export default ArchiveModal;