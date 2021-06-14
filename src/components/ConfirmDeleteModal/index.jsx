import React from 'react';

import Modal from '@material-ui/core/Modal';

import { 
  TextTitle, 
  Container, 
  ButtonContainer, 
  ButtonText, 
  ButtonDiv
} from './styles';

const ConfirmDeleteModal = ({ open, handleClose, onPressDelete }) => {
  return(
    <Modal
      open={open}
      style={{display:'flex',alignItems:'center',justifyContent:'center'}}
    >
      <Container>
        <TextTitle>{'Tem certeza que quer deletar?'}</TextTitle>
        <ButtonDiv>
          <ButtonContainer verde onClick={handleClose}>
            <ButtonText>NÃO</ButtonText>
          </ButtonContainer>
          <ButtonContainer onClick={onPressDelete}>
            <ButtonText>SIM</ButtonText>
          </ButtonContainer>
        </ButtonDiv>
      </Container>
    </Modal>
  )
}

export default ConfirmDeleteModal;