import React from 'react';
import PropTypes from 'prop-types';

import { Container, CardImage, NoImageDiv, FileIcon, FooterView, FooterText, ButtonContainer, ButtonText } from './styles';

const FolderCard = ({
  title,
  image,
}) => {
  return(
  <Container>
    {image && <CardImage src={image}/>}
    {!image && <NoImageDiv><FileIcon /></NoImageDiv>}
    <FooterView>
      <FooterText>{title}</FooterText>
      <ButtonContainer>
        <ButtonText>{'Baixar'}</ButtonText>
      </ButtonContainer>
    </FooterView>
  </Container>)
}

FolderCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default FolderCard;