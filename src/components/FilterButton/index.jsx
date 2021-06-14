import React from 'react';
import PropTypes from 'prop-types';

import { 
  StyledButton, 
  FilterText, 
  ArrowIcon, 
  BubbleDiv, 
  BubbleText 
} from './styles';

const FilterButton = ({ onClick, value, filterLength }) => {
  return(
    <StyledButton onClick={onClick}>
      <FilterText>{value || 'Filtro'}</FilterText>
      {!!filterLength && <BubbleDiv><BubbleText>{filterLength}</BubbleText></BubbleDiv>}
      <ArrowIcon />
    </StyledButton>
  )
}

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default FilterButton;