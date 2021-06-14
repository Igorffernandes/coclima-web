import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { editCompany } from 'services/companies';
import { useEffect } from 'react';

const EditEmpresaModal = ({visible, onClose, companyID, callbackEdit}) => {
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')

  function handleChangeEmail(value){
    setEmail(value.target.value)
  }

  function handleChangeEmailConfirmation(value){
    setEmailConfirmation(value.target.value)
  }

  useEffect(() => {
    setEmail('');
    setEmailConfirmation('');
  },[visible])

  async function editNewCompany(){
    if(email === emailConfirmation && email !== ''){
      try{
        const data = {email, emailConfirmation}
        await editCompany(data, companyID);
        onClose();
        callbackEdit();
      } catch (err){
        console.log(err);
      }
    }
    
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
                <Styled.ViewButton onClick={editNewCompany}>
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
    companyID: PropTypes.number,
    callbackEdit: PropTypes.func,
  }

export default EditEmpresaModal;