import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

const AddEmpresaModal = ({visible, onClose, handleButton}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleChangeEmail(value){
    setEmail(value.target.value)
  }

  function handleChangeName(value){
    setName(value.target.value)
  }

  return  <BaseModal 
            visible={visible} 
            onClose={onClose} >
              <Styled.ViewContainer>
                <Styled.TextTitle>
                  Adicionar nova  empresa
                </Styled.TextTitle>
                <Styled.FormBox>
                  <Styled.TextLabel>
                    Nome
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={name}
                    onChange={handleChangeName}
                    disableUnderline/>
                  <Styled.TextLabel>
                    Email
                  </Styled.TextLabel>
                  <Styled.MaterialInput 
                    value={email}
                    onChange={handleChangeEmail}
                    disableUnderline/>
                </Styled.FormBox>
                <Styled.ViewButton onClick={handleButton}>
									<Styled.TextButton>
                    ADICIONAR
									</Styled.TextButton>
								</Styled.ViewButton>
              </Styled.ViewContainer>
          </BaseModal>
}

AddEmpresaModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    handleButton: PropTypes.func,
  }

export default AddEmpresaModal;