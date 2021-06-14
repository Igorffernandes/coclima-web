import React, {useState, useEffect } from 'react';

import Table from 'components/Table';
import ActionCard from 'components/ActionCard';
import PhotoModal from 'components/PhotoModal';
import TableButton from 'components/TableButton';
import PhotoModalSuccess from 'components/PhotoModalSuccess';
import AddEmpresaModal from 'components/AddEmpresaModal';
import AddEmpresaModalSuccess from 'components/AddEmpresaModalSuccess';
import AddPlantioModal from 'components/AddPlantioModal';
import AddPlantioModalSuccess from 'components/AddPlantioModalSuccess';

import { fetchCompanies, deactivateCompany } from 'services/companies';

import { Container, Header, Title, TableDiv, CardsDiv, SubContainer } from './styles';

const AdmMainPage = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  
  const companiesFetch = async () => {
    try{
      setLoading(true);
      let queryObject = {
      };
      if(selectedCompanies.length > 0){
        queryObject.company_id = selectedCompanies;
      }
      const companies = await fetchCompanies(queryObject);
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

  const [modalPlantio, setModalPlantio] = useState(false)
  const [modalPlantioSuccess, setModalPlantioSuccess] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(false)
  const [modalPhotoSuccess, setModalPhotoSuccess] = useState(false)
  const [modalAddEmpresa, setModalAddEmpresa] = useState(false)
  const [modalAddEmpresaSuccess, setModalAddEmpresaSuccess] = useState(false)

  function handleModalPlantio() {
    setModalPlantio(!modalPlantio)
  }

  function handleModalPlantioSuccess() {
    setModalPlantioSuccess(!modalPlantioSuccess)
  }

  function handleModalPhoto() {
    setModalPhoto(!modalPhoto)
  }

  function handleModalPhotoSuccess() {
    setModalPhotoSuccess(!modalPhotoSuccess)
  }

  function handleAddPhotoModal() {
    handleModalPhotoSuccess()
    setModalPhoto(true)
  }

  function handleConfirmPhoto() {
    handleModalPhoto()
    handleModalPhotoSuccess()
  }
  
  function handleModalAddEmpresa(){
    setModalAddEmpresa(!modalAddEmpresa)
  }

  function handleAddEmpresa(){
    console.log('faz post add empresa')
    setModalAddEmpresa(false)
    setModalAddEmpresaSuccess(!modalAddEmpresaSuccess)
  }

  function handleAddEmpresaSuccess(){
    setModalAddEmpresaSuccess(!modalAddEmpresaSuccess)
    handleModalAddEmpresa()
  }

  function handlePlantioSuccess(){
    setModalPlantioSuccess(!modalPlantioSuccess)
    handleModalPlantio()
  }

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
            filterProps={{
              selectedCompanies:selectedCompanies, 
              setSelectedCompanies: setSelectedCompanies,
              closeCallback: async () => {
                companiesFetch();
              }}
            }
            handleAddEmpresa={handleModalAddEmpresa}
          />}
        </TableDiv>
        <CardsDiv>
          <ActionCard handleModal={handleModalPlantio}/>
          <ActionCard handleModal={handleModalPhoto} type='photo' />
        </CardsDiv>
      </SubContainer>
      {modalPhoto &&
        <PhotoModal 
          visible={modalPhoto} 
          onClose={handleModalPhoto}
          handleConfirm={handleConfirmPhoto}/>
      }
      <PhotoModalSuccess 
        visible={modalPhotoSuccess} 
        onClose={handleModalPhotoSuccess}
        handleButton={handleAddPhotoModal}/>
      {modalAddEmpresa &&
      <AddEmpresaModal 
        visible={modalAddEmpresa} 
        onClose={handleModalAddEmpresa}
        handleButton={handleAddEmpresa}/>
      }
      <AddEmpresaModalSuccess
        visible={modalAddEmpresaSuccess} 
        onClose={handleAddEmpresaSuccess}
        handleButton={handleAddEmpresaSuccess}/>
      {modalPlantio &&
        <AddPlantioModal 
          visible={modalPlantio} 
          onClose={handleModalPlantio}
          handleButton={handlePlantioSuccess}/>
      }
      <AddPlantioModalSuccess 
        visible={modalPlantioSuccess} 
        onClose={handleModalPlantioSuccess}
        handleButton={handlePlantioSuccess}/>
    </Container>
  )
}

export default AdmMainPage;