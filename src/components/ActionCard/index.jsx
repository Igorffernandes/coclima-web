import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, CameraIcon, TreeIcon, CardText, CardButton, CardButtonText } from './styles';

const ActionCard = ({type, handleModal}) => {

  return(
    <CardContainer>
      {type === 'photo' ? 
      <>
        <CameraIcon />
        <CardText>{'Adicionar nova\nfoto de plantio'}</CardText>
        <CardButton onClick={handleModal}>
        <CardButtonText>{'ADICIONAR'}</CardButtonText>
      </CardButton>
      </>
        :
      <>
        <TreeIcon />
        <CardText>{'Adicionar novo\nplantio'}</CardText>
        <CardButton onClick={handleModal}>
        <CardButtonText>{'ADICIONAR'}</CardButtonText>
      </CardButton>
      </>
      }

    </CardContainer>
  )
}

ActionCard.propTypes = {
  type: PropTypes.oneOf(['plantio', 'photo']),
  handleModal: PropTypes.func,
}

export default ActionCard;