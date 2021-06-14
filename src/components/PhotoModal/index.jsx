import BaseModal from 'components/BaseModal';
import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import {useDropzone} from 'react-dropzone';
import {uploadPhoto} from 'services/archives';

const PhotoModal = ({visible, onClose, handleConfirm}) => {
	const [image, setImage] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
			reader.onload = () => {
			   setImage(reader.result)
				}
    })
    
  }, [])
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop, 
    accept: 'image/jpeg, image/png'
  })

  
  const createPhoto = async (company_id = 1) => {
    try{
      const newPhoto = {
        data: image,
        type: 'image',
        company_id: company_id,
        name: acceptedFiles[0].path,
        keywords: 'photo'
      }
      await uploadPhoto(newPhoto);
    } catch(err){
      console.log(err);
    } 
  }

  const createNewPhoto = () => {
    createPhoto()
    handleConfirm()
  }

  return  <BaseModal 
			visible={visible} 
			onClose={onClose} >
				<Styled.ViewContainer>
				<Styled.TextTitle>Envie sua foto</Styled.TextTitle>
				{acceptedFiles.length === 0 ? 
				(
				<Styled.ArchiveBox {...getRootProps({className: 'dropzone'})}>
					<input {...getInputProps()} />
					<Styled.FileIcon />
					<Styled.TextBody>
							Arraste e solte sua foto aqui
					</Styled.TextBody>
					<Styled.TextBodyBold>
							ou
					</Styled.TextBodyBold>
					<Styled.ViewButton>
						<Styled.TextButton>
						PROCURE
						</Styled.TextButton>
					</Styled.ViewButton>
				</Styled.ArchiveBox>
				) : 
				(
        <>
          <Styled.ContainerDiv>
              {image &&
              <Styled.ImageBox src={image} />
              }
            <Styled.FormDiv>
              <Styled.FormText>
                Nome
              </Styled.FormText>
              <Styled.FormBox>
                <Styled.FormTextBox>
                {acceptedFiles[0].path}
                </Styled.FormTextBox>
              </Styled.FormBox>
            </Styled.FormDiv>
          </Styled.ContainerDiv>
          <Styled.ViewButton extraMargin="38" onClick={createNewPhoto}>
          <Styled.TextButton>
              CONFIRMAR ENVIO
          </Styled.TextButton>
        </Styled.ViewButton>
        </>
				)}
				</Styled.ViewContainer>
			</BaseModal>
}

PhotoModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  }

export default PhotoModal;