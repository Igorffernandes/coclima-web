import React from 'react';
import PropTypes from 'prop-types';

import { 
  Container,
  FooterText, 
  ButtonContainer,
  FileItemTrash,
  Body,
} from './styles';

const FolderCard = ({
  title,
  onPressOpen,
  onPressDelete,
  item,
}) => {
  return(
  <Container>
      <FileItemTrash onClick={() => onPressDelete(item.id)}/>
      <Body>
        <FooterText>{title}</FooterText>
        <ButtonContainer onClick={() => onPressOpen(title)}>Abrir</ButtonContainer>
      </Body>
  </Container>)
}

FolderCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default FolderCard;