import React, { useState, useEffect } from 'react';

import Table from 'components/Table';
import TableButton from 'components/TableButton';
import EditPlantioModal from 'components/EditPlantioModal';
import AddEmpresaModal from 'components/AddEmpresaModal';
import AddPlantioModal from 'components/AddPlantioModal';
import EditEmpresaModal from 'components/EditEmpresaModal';
import AddUserModal from 'components/AddUserModal';
import EditUserModal from 'components/EditUserModal';

import { fetchCompanies, fetchPartners, deactivateCompany } from 'services/companies';
import { fetchUsers, deactivateUser } from 'services/users';
import { fetchPlantations, deactivatePlanting } from 'services/plantations';
import { admTraslate } from 'config/constants';

import {
  Container,
  Header,
  Title,
  TableDiv,
  CardsDiv,
  SubContainer,
  SelectOption,
  User,
  Company,
  Partner,
  Planting,
} from './styles';

const AdmMainPage = () => {
  const [selectData, setSelectData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState('');
  const [modalAddPlantio, setModalPlantio] = useState(false)
  const [editPlantioModal, setEditPlantioModal] = useState(false)
  const [modalAddUser, setModalUser] = useState(false)
  const [editUserModal, setEditUserModal] = useState(false)
  const [modalAddCompany, setModalAddCompany] = useState(false)
  const [editCompanyModal, setEditCompanyModal] = useState('');  
  const [searchText, setSearchText] = useState('');
  const [select, setSelect] = useState('user');

  const excludeItem = async (item_id) => {
    try{
      setLoading(true);
      if (select === 'user') {
        await deactivateUser(item_id);
      }
  
      if (select === 'planting') {
        await deactivatePlanting(item_id);
      }
  
      if (select === 'company' || select === 'partner') {
        await deactivateCompany(item_id);
      }

      fetchData();
    } catch (err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const fetchData = async () => {
    setLoading(true);
    let data = [];
    try {
      if (select === 'user') {
        data = await fetchUsers();
      }
  
      if (select === 'company') {
        data = await fetchCompanies();
      }
  
      if (select === 'partner') {
        data = await fetchPartners();
      }
  
      if (select === 'planting') {
        const planting = await fetchPlantations();
        data = planting.plantation;
      }
    }catch(err) {
      console.log(err);
    }

    setSelectData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [select]);

  useEffect(() => {
    if(searchText.length > 3){
      const pesquisa = selectData.filter(item => String(item.name).toLowerCase().includes(searchText.toLowerCase()))
      setSelectData(pesquisa)
    }
    if(searchText.length === 0){
      fetchData();
    }
  }, [searchText])

  const columns = [
    { render: rowData => <div><TableButton title={'Editar'} onClick={() => handleEdit(rowData.id)}/></div>},
    { render: rowData => <div><TableButton title={'Excluir'} onClick={async () => excludeItem(rowData.id)}/></div>},
  ];

  const userColumns = [
    { field: 'id', hidden: true },
    { title: 'Nome', field: 'name'},
    { title: 'Email', field: 'email' },
    { title: 'Permissão', field: 'role' },
    ...columns,
  ];

  const companyColumns = [
    { field: 'id', hidden: true },
    { title: 'Empresa', field: 'name' },
    { title: 'CNPJ - CPF', field: 'cpfcnpj' },
    { title: 'Telefone', field: 'phone' },
    { title: 'Email', field: 'email' },
    { title: 'Site', field: 'site' },
    ...columns,
  ];

  const plantingColumns = [
    { field: 'id', hidden: true },
    { title: 'Arvores', field: 'trees' },
    { title: 'Data', field: 'date' },
    ...columns,
  ];
  
  const callbackEdit = async () => {
      handleModalCreate();
  
      try{
        setLoading(true);
        await fetchData();
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
  }

  function handleEdit(id){
    setEditId(id);

    if (select === 'user') {
      setEditUserModal(!editUserModal)
    }

    if (select === 'planting') {
      setEditPlantioModal(!editPlantioModal)
    }

    if (select === 'company' || select === 'partner') {
      setEditCompanyModal(!editCompanyModal)
    }
  }

  const handleCloseEdit = async () => {
    if (select === 'user') {
      setEditUserModal(!editUserModal)
    }

    if (select === 'planting') {
      setEditPlantioModal(!editPlantioModal)
    }

    if (select === 'company' || select === 'partner') {
      setEditCompanyModal(!editCompanyModal)
    }
    
    await fetchData();
  }
  
  function handleModalCreate(){
    if (select === 'planting') {
      setModalPlantio(!modalAddPlantio)
    }
    
    if (select === 'user') {
      setModalUser(!modalAddUser);
    }

    if (select === 'company' || select === 'partner') {
      setModalAddCompany(!modalAddCompany);
    }
  }

  const getColumn = () => {
    if (select === 'user') {
      return userColumns;
    }

    if (select === 'planting') {
      return plantingColumns;
    }

    return companyColumns;
  }

  return(
    <Container>
      <Header>
        <Title>{'Área do Administrador'}</Title>
        <SelectOption>
          <User state={select} onClick={() => setSelect('user')}>{admTraslate['user']}</User>
          <Company state={select} onClick={() => setSelect('company')}>{admTraslate['company']}</Company>
          <Partner state={select} onClick={() => setSelect('partner')}>{admTraslate['partner']}</Partner>
          <Planting state={select} onClick={() => setSelect('planting')}>{admTraslate['planting']}</Planting>
        </SelectOption>
      </Header>
      <SubContainer>
        <TableDiv>
          {!loading && <Table
            data={selectData}
            columns={getColumn()}
            title={admTraslate[select]}
            actions={[]}
            searchProps={{
              value: searchText,
              setValue: setSearchText,
            }}
            handleAddEmpresa={handleModalCreate}
          />}
        </TableDiv>
      </SubContainer>
      {modalAddPlantio && <AddPlantioModal 
        visible={modalAddPlantio} 
        onClose={callbackEdit}
        handleButton={callbackEdit}/>}
      {editPlantioModal && <EditPlantioModal 
        visible={editPlantioModal} 
        onClose={handleCloseEdit}
        plantationId={editId}
        handleButton={handleCloseEdit}/>}
      {modalAddCompany && <AddEmpresaModal
        visible={modalAddCompany}
        onClose={callbackEdit}
        handleButton={callbackEdit}/>}
      {editCompanyModal && <EditEmpresaModal 
        visible={editCompanyModal} 
        onClose={handleCloseEdit}
        companyID={editId}
        handleButton={handleCloseEdit}/>}
      {modalAddUser && <AddUserModal
        visible={modalAddUser}
        onClose={callbackEdit}
        handleButton={callbackEdit}/>}
      {editUserModal && <EditUserModal 
        visible={editUserModal} 
        onClose={handleCloseEdit}
        userId={editId}
        handleButton={handleCloseEdit}/>}
    </Container>
  )
}

export default AdmMainPage;