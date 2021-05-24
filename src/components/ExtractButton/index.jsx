import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, ButtonText, DownloadIcon } from './styles';

const FilterButton = ({}) => {
  return(
    <StyledButton onClick={() => console.log('Extrair')}>
      <DownloadIcon />
      <ButtonText>{'Extrair'}</ButtonText>
    </StyledButton>
  )
}



export default FilterButton;