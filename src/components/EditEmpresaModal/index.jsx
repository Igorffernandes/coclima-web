import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

const EditEmpresaModal = ({visible, onClose}) => {
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')

  function handleChangeEmail(value){
    setEmail(value.target.value)
  }

  function handleChangeEmailConfirmation(value){
    setEmailConfirmation(value.target.value)
  }

  function handleButton(){
    console.log('faz post')
    onClose()
  }

  return  <BaseModal 
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Mudar email
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.TextLabel>
                    Email novo
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={email}
                    onChange={handleChangeEmail}
                    disableUnderline/>
                  <Styled.TextLabel>
                    Confirmar email novo
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={emailConfirmation}
                    onChange={handleChangeEmailConfirmation}
                    disableUnderline/>
                </Styled.FormBox>
                <Styled.ViewButton onClick={handleButton}>
									<Styled.TextButton>
										MUDAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

EditEmpresaModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  }

export default EditEmpresaModal;