import React, { useState } from 'react';

import {
  Container,
  Header,
  Title,
  SubTitle,
} from './styles';
import InfoCards from '../../../components/InfoCards';

const Dashboard = () => {
  const [data, setData] = useState({
    three: 13,
    carbon: 1690,
    capital: 74000.32
  });

  return (
    <Container>
      <Header>
        <Title>Dashboard</Title>
        <SubTitle>Veja o quanto você já mudou o mundo!</SubTitle>
      </Header>
      <InfoCards info={data} />
    </Container>
  );
};

export default Dashboard;
