import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, FilterText, ArrowIcon } from './styles';

const FilterButton = ({}) => {
  return(
    <StyledButton onClick={() => console.log('Filtrar')}>
      <FilterText>{'Filtrar'}</FilterText>
      <ArrowIcon />
    </StyledButton>
  )
}



export default FilterButton;