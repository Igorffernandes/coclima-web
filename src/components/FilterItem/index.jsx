import React from 'react';

import { ItemText, Container, ActiveRadio, NeutralRadio } from './styles';

const FilterItem = ({name, active, onPressSelectedItem}) => {
  return (
    <Container onClick={onPressSelectedItem}>
      <ItemText>{name}</ItemText>
      {active && <ActiveRadio />}
      {!active && <NeutralRadio /> }
    </Container>
  )
}

export default FilterItem;