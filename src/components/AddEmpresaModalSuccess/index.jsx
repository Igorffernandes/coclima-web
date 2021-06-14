import BaseModal from 'components/BaseModal';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const AddEmpresaModalSuccess = ({visible, onClose, handleButton}) => {
  return  <Styled.ModalContainer 
            open={visible}
            onClose={onClose} >
              <Styled.ViewContainerModal>
                <Styled.ViewContainer>
                  <Styled.PersonIcon />
                  <Styled.TextBody>
                    Empresa adicionada
                  </Styled.TextBody>
                  <Styled.ViewButton onClick={handleButton}>
                    <Styled.TextButton>
                      ADICIONAR MAIS
                    </Styled.TextButton>
                  </Styled.ViewButton>
                  <Styled.ViewButtonGoBack onClick={onClose}>
                    <Styled.TextButtonGoback>
                      VOLTAR PARA HOME
                    </Styled.TextButtonGoback>
                  </Styled.ViewButtonGoBack>
                </Styled.ViewContainer>
              </Styled.ViewContainerModal>
          </Styled.ModalContainer>
}

AddEmpresaModalSuccess.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  }

export default AddEmpresaModalSuccess;