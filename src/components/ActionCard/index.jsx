import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, CameraIcon, TreeIcon, CardText, CardButton, CardButtonText } from './styles';

const ActionCard = ({type}) => {
  return(
    <CardContainer>
      {type === 'photo' ? 
      <>
        <CameraIcon />
        <CardText>{'Adicionar nova\nfoto de plantio'}</CardText>
      </>
        :
      <>
        <TreeIcon />
        <CardText>{'Adicionar novo\nplantio'}</CardText>
      </>
      }
      <CardButton>
        <CardButtonText>{'ADICIONAR'}</CardButtonText>
      </CardButton>
    </CardContainer>
  )
}

ActionCard.propTypes = {
  type: PropTypes.oneOf(['plantio', 'photo'])
}

export default ActionCard;