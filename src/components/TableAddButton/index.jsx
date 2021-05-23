import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, PlusIcon, ButtonText } from './styles';

const TableAddButton = () => {
  return(
    <ButtonContainer>
      <PlusIcon />
      <ButtonText>
        {'Adicionar'}
      </ButtonText>
    </ButtonContainer>
  )
}

export default TableAddButton;