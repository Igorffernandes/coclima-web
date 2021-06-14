import React from 'react';
import PropTypes from 'prop-types';
import Base64Downloader from 'react-base64-downloader';

import { Container, CardImage, NoImageDiv, FileIcon, FooterView, FooterText, ButtonContainer, ButtonText, styleObjectButtonText } from './styles';

const FolderCard = ({
  title,
  type,
  data,
}) => {

  return(
  <Container>
    {type === 'image' && <CardImage src={`data:image/jpeg;base64, ${data}`}/>}
    {type === 'pdf' && <NoImageDiv><FileIcon /></NoImageDiv>}
    <FooterView>
      <FooterText>{title}</FooterText>
      <ButtonContainer>
        {type==='image' && <Base64Downloader 
          Tag="a" 
          base64={`${type === 'image' ? 'data:image/jpeg;base64,' : 'data:application/pdf;base64,'} ${data}`} 
          style={styleObjectButtonText} 
          downloadName="1x1_red_pixel"
        >
          Baixar
        </Base64Downloader>}
        {type === 'pdf' && <ButtonText href={`data:application/pdf;base64, ${data}`} download="file.pdf">BAIXAR</ButtonText>}
      </ButtonContainer>
    </FooterView>
  </Container>)
}

FolderCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default FolderCard;