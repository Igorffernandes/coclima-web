import React from 'react';

import { InputContainer, SearchIcon, SearchInput } from './styles';

const SearchBox = ({

}) => {
  return(
    <InputContainer>
      <SearchIcon />
      <SearchInput value={'Procurar'}/>
    </InputContainer>
  )
}

export default SearchBox;