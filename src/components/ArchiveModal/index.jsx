import BaseModal from 'components/BaseModal';
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import {useDropzone} from 'react-dropzone';

const ArchiveModal = ({visible, onClose}) => {

  const {getRootProps, getInputProps, acceptedFiles} = useDropzone()

	function handleButton(){
			console.log('faz post dos arquivos')
      onClose()
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