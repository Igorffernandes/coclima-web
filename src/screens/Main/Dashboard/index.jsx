import React, { useState } from 'react';

import {
  Container,
  Header,
  Title,
  SubTitle,
  PlantingTransferDiv,
  Planting,
  Transfer,
  ChartDiv,
  ChartOptions,
  TimeOption,
  ChartType,
  OptionText,
} from './styles';
import InfoCards from 'components/InfoCards';
import FilterCards from 'components/FilterCards';
import LineChart from 'components/LineChart';

const Dashboard = () => {
  const [planting, setPlanting] = useState(true);
  const [transfer, setTransfer] = useState(false);
  const [filterType, setFilterType] = useState('line')
  const [data, setData] = useState({
    three: 13,
    carbon: 1690,
    capital: 74000.32
  });
  const [filterData, setFilterData] = useState([
    { x: 1, y: 7 },
    { x: 2, y: 5 },
    { x: 3, y: 1 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
    { x: 6, y: 20 },
    { x: 7, y: 2 },
    { x: 8, y: 4},
    { x: 9, y: 19},
    { x: 10, y: 8},
    { x: 11, y: 9},
    { x: 12, y: 14},
  ]);

  const handleChange = (option) => {
    // Do the filter
    if (!option) {
      setPlanting(!planting);
      setTransfer(!transfer);
    }
  }

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <SubTitle>Veja o quanto você já mudou o mundo!</SubTitle>
      </Header>
      <InfoCards info={data} />
      <PlantingTransferDiv>
        <Planting selected={planting} onClick={() => handleChange(planting)}>PLANTIO</Planting>
        <Transfer selected={transfer} onClick={() => handleChange(transfer)}>REPASSE</Transfer>
      </PlantingTransferDiv>
      <FilterCards info={data} />
      <ChartDiv>
        <LineChart type={filterType} filter={filterData} />
        <ChartOptions>
          <TimeOption>
            <OptionText>30d</OptionText>
            <OptionText>3m</OptionText>
            <OptionText>1a</OptionText>
            <OptionText>tudo</OptionText>
          </TimeOption>
          <ChartType>
            <OptionText>linha</OptionText>
            <OptionText>barra</OptionText>
            <OptionText>lista</OptionText>
          </ChartType>
        </ChartOptions>
      </ChartDiv>
    </Container>
  );
};

export default Dashboard;
