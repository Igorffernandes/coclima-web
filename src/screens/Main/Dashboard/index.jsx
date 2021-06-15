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
import Filter from 'components/Filter';
import ExtractButton from 'components/ExtractButton';

import { fetchDashboard } from 'services/dashboard';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [planting, setPlanting] = useState(true);
  const [transfer, setTransfer] = useState(false);
  const [chartType, setChartType] = useState('line');
  const [range, setChartRange] = useState('30');
  const [data, setData] = useState({
    trees: 0,
    carbon: 0,
    capital: 0,
    treeChartData: {},
    capitalChartData: {},
  });
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleChange = (option) => {
    // Do the filter
    if (!option) {
      setPlanting(!planting);
      setTransfer(!transfer);
    }
  }
  
  const fetchDashData = async () => {
    try{
      setLoading(true);
      let queryObject = {
      };
      if(selectedCompanies.length > 0){
        queryObject.company_id = selectedCompanies;
      }
      if(range !== 'tudo'){
        queryObject.date_filter = range;
      }
      const dashData = await fetchDashboard(queryObject);
      setData({...data, ...dashData});
    } catch(err){
      console.log(err);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDashData();
  }, [range])

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
          <Filter 
            selectedCompanies={selectedCompanies} 
            setSelectedCompanies={setSelectedCompanies} 
            closeCallback={async () => fetchDashData()}
          />
          <ExtractButton />
        </FilterOptions>
      </FilterCardsDiv>
      <ChartDiv>
        {!loading && Object.keys(planting ? data?.treeChartData : data?.capitalChartData).length !== 0 && 
          <LineChart 
          type={chartType} 
          filter={planting? data.treeChartData : data.capitalChartData} 
        />}
        <Hr />
        <ChartOptions>
          <TimeOption>
            <OptionText1 active={range} onClick={() => setChartRange('30')}>30d</OptionText1>
            <OptionText2 active={range} onClick={() => setChartRange('90')}>3m</OptionText2>
            <OptionText3 active={range} onClick={() => setChartRange('365')}>1a</OptionText3>
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
