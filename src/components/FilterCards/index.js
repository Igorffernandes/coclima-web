import React from 'react';

import {
  Container,
  Value,
  DescriptionDiv,
  ValueDiv,
  DescriptionText,
  TreeDiv,
  CarbonDiv,
  InfoValue,
  Hr,
} from './styles';

const FilterCards = ({ info }) => {
  return (
    <Container>
      <TreeDiv>
        <ValueDiv>
          <Value>{info.three}</Value>
        </ValueDiv>
        <DescriptionDiv>
          <DescriptionText>Árvores plantadas</DescriptionText>
        </DescriptionDiv>
      </TreeDiv>
      <Hr />
      <CarbonDiv>
        <ValueDiv>
          <Value>{info.carbon}</Value>
          <InfoValue>g</InfoValue>
        </ValueDiv>
        <DescriptionDiv>
          <DescriptionText>Carbono Compensado</DescriptionText>
        </DescriptionDiv>
      </CarbonDiv>
    </Container>
  );
};

export default FilterCards;