import React from 'react';

import {
  Container,
  Value,
  DescriptionDiv,
  ValueDiv,
  DescriptionText,
  TreeDiv,
  CarbonDiv,
  CapitalDiv,
  InfoValue,
  Icon,
} from './styles';
import IconTree from '../../assets/icons/overviewTree.png';
import IconCarbon from '../../assets/icons/overviewCarbon.png';
import IconCapital from '../../assets/icons/overviewMoney.png';

import CircularProgress from '@material-ui/core/CircularProgress';

const InfoCards = ({ info, loading }) => {
  return (
    <Container>
      <TreeDiv>
        <ValueDiv>
          {loading ? <CircularProgress/> : <Value>{info.trees}</Value>}
        </ValueDiv>
        <DescriptionDiv>
          <Icon iconPath={IconTree}/>
          <DescriptionText>Árvores plantadas</DescriptionText>
        </DescriptionDiv>
      </TreeDiv>
      <CarbonDiv>
        <ValueDiv>
          {loading ? <CircularProgress/> : <Value>{info.carbon}</Value>}
          <InfoValue>g</InfoValue>
        </ValueDiv>
        <DescriptionDiv>
          <Icon iconPath={IconCarbon}/>
          <DescriptionText>Carbono Compensado</DescriptionText>
        </DescriptionDiv>
      </CarbonDiv>
      <CapitalDiv>
        <ValueDiv>
          <InfoValue >R$</InfoValue>
          {loading ? <CircularProgress/> : <Value>{info.capital}</Value>}
        </ValueDiv>
        <DescriptionDiv>
          <Icon iconPath={IconCapital}/>
          <DescriptionText>Capital Repassado</DescriptionText>
        </DescriptionDiv>
      </CapitalDiv>
    </Container>
  );
};

export default InfoCards;