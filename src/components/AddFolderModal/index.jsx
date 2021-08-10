import BaseModal from 'components/BaseModal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { uploadPhoto } from 'services/archives';

const AddFolderModal = ({visible, onClose}) => {
  const [name, setName] = useState('')

  async function handleAdicionar(){
    try{
      const newData = {
        name,
        data: [{base64: 'pasta', type: 'file'}],
      }

      await uploadPhoto(newData);

      onClose();
    } catch(err) {
      console.log(err);
    }
  }

  return  <BaseModal
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar nova Pasta
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.CoordFormBox>
                    <Styled.FormBox>
                      <Styled.TextLabel>
                        Nome
                      </Styled.TextLabel>
                      <Styled.MaterialInput
                        value={name}
                        onChange={(value) => setName(value.target.value)}
                        disableUnderline/>
                    </Styled.FormBox>
                  </Styled.CoordFormBox>
                </Styled.FormBox>
                <Styled.ViewButton onClick={handleAdicionar}>
									<Styled.TextButton>
                    ADICIONAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

AddFolderModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
  }

export default AddFolderModal;