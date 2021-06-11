import React, { useState, useEffect } from 'react';

import Table from 'components/Table';
import ActionCard from 'components/ActionCard';
import TableButton from 'components/TableButton';

import { fetchCompanies, deactivateCompany } from 'services/companies';

import { Container, Header, Title, TableDiv, CardsDiv, SubContainer } from './styles';

const AdmMainPage = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const companiesFetch = async () => {
    try{
      setLoading(true);
      const companies = await fetchCompanies();
      setCompaniesData(companies);
    } catch(err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const excludeCompany = async (company_id) => {
    try{
      setLoading(true);
      await deactivateCompany(company_id);
      const companies = await fetchCompanies();
      setCompaniesData(companies);
    } catch {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    companiesFetch();
  }, [])

  //PEIDEI E NADEI PRO LIFECYCLE 
  const columns = [
    { title: 'Empresa', field: 'name' },
    { title: 'Email', field: 'email' },
    { field: 'id', hidden: true },
    { render: rowData => <div><TableButton title={'Editar'} onClick={() => console.log('EDITAR EMAIL')}/></div>},
    { render: rowData => <div><TableButton title={'Excluir'} onClick={async () => excludeCompany(rowData.id)}/></div>},
  ];


  return(
    <Container>
      <Header>
        <Title>{'Área do Administrador'}</Title>
      </Header>
      <SubContainer>

        <TableDiv>
          {!loading && <Table
            data={companiesData}
            columns={columns}
            title={'Empresas'}
            actions={[]}
          />}
        </TableDiv>
        <CardsDiv>
          <ActionCard/>
          <ActionCard type='photo' />
        </CardsDiv>
      </SubContainer>
    </Container>
  )
}

export default AdmMainPage;