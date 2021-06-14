import React, { useState, useEffect } from 'react';

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
  OptionText1,
  OptionText2,
  OptionText3,
  OptionText4,
  OptionChart1,
  OptionChart2,
  OptionChart3,
  Hr,
  FilterCardsDiv,
  FilterOptions,
} from './styles';
import InfoCards from 'components/InfoCards';
import FilterCards from 'components/FilterCards';
import LineChart from 'components/LineChart';
import FilterButton from 'components/FilterButton';
import ExtractButton from 'components/ExtractButton';

import { fetchDashboard } from 'services/dashboard';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [planting, setPlanting] = useState(true);
  const [transfer, setTransfer] = useState(false);
  const [chartType, setChartType] = useState('line');
  const [range, setChartRange] = useState('30d');
  const [data, setData] = useState({
    trees: 0,
    carbon: 0,
    capital: 0
  });
  const [chartData, setChartData] = useState([
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

  useEffect(() => {
    const fetchDashData = async () => {
      try{
        setLoading(true);
        const dashData = await fetchDashboard();
        setData({...data, ...dashData});
      } catch(err){
        console.log(err);
      } finally{
        setLoading(false);
      }
    }
    fetchDashData();
  }, [])

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <SubTitle>Veja o quanto você já mudou o mundo!</SubTitle>
      </Header>
      <InfoCards info={data} loading={loading}/>
      <PlantingTransferDiv>
        <Planting selected={planting} onClick={() => handleChange(planting)}>PLANTIO</Planting>
        <Transfer selected={transfer} onClick={() => handleChange(transfer)}>REPASSE</Transfer>
      </PlantingTransferDiv>
      <FilterCardsDiv>
        <FilterCards info={data} />
        <FilterOptions>
          <FilterButton />
          <ExtractButton />
        </FilterOptions>
      </FilterCardsDiv>
      <ChartDiv>
        <LineChart type={chartType} filter={chartData} />
        <Hr />
        <ChartOptions>
          <TimeOption>
            <OptionText1 active={range} onClick={() => setChartRange('30d')}>30d</OptionText1>
            <OptionText2 active={range} onClick={() => setChartRange('3m')}>3m</OptionText2>
            <OptionText3 active={range} onClick={() => setChartRange('1a')}>1a</OptionText3>
            <OptionText4 active={range} onClick={() => setChartRange('tudo')}>tudo</OptionText4>
          </TimeOption>
          <ChartType>
            <OptionChart1 active={chartType} onClick={() => setChartType('line')}>linha</OptionChart1>
            <OptionChart2 active={chartType} onClick={() => setChartType('bar')}>barra</OptionChart2>
            <OptionChart3 active={chartType} onClick={() => setChartType('list')}>lista</OptionChart3>
          </ChartType>
        </ChartOptions>
      </ChartDiv>
    </Container>
  );
};

export default Dashboard;
