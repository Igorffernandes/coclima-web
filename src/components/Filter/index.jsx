import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

import FilterButton from 'components/FilterButton';

const Filter = () => {
  return(
    <>
      <FilterButton />
      <Dropdown options={options} onChange={() => console.log()} value={defaultOption} placeholder="Select an option" />
    </>
  )
}

export default Filter;