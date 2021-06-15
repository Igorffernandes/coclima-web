import React from 'react';

import { InputContainer, SearchIcon, SearchInput } from './styles';

const SearchBox = ({
  value,
  setValue,
}) => {
  return(
    <InputContainer>
      <SearchIcon />
      <SearchInput value={value} onChange={(evt) => setValue(evt.target.value)}/>
    </InputContainer>
  )
}

export default SearchBox;