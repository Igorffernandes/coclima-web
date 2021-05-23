import React from 'react';

import Table from 'components/Table';

import { Container, Header, Title, TableDiv, CardsDiv, SubContainer } from './styles';

import { columns, fakeData } from './utils';

const AdmMainPage = () => {
  return(
    <Container>
      <Header>
        <Title>{'Área do Administrador'}</Title>
      </Header>
      <SubContainer>

        <TableDiv>
          <Table
            data={fakeData}
            columns={columns}
            title={'Empresas'}
            actions={[]}
          />
        </TableDiv>
        <CardsDiv/>
      </SubContainer>
    </Container>
  )
}

export default AdmMainPage;