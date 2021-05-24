import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, FilterText } from './styles';

const TableButton = ({ onClick, title }) => {
  return(
    <StyledButton onClick={onClick}>
      <FilterText>{title || 'Filtro'}</FilterText>
    </StyledButton>
  )
}

TableButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
}

export default TableButton;