import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, PlusIcon, ButtonText } from './styles';

const TableAddButton = ({handleClick}) => {
  return(
    <ButtonContainer onClick={handleClick}>
      <PlusIcon />
      <ButtonText>
        {'Adicionar'}
      </ButtonText>
    </ButtonContainer>
  )
}

TableAddButton.propTypes = {
  handleClick: PropTypes.func,
};


export default TableAddButton;