import React, {useState} from 'react';

import Table from 'components/Table';
import ActionCard from 'components/ActionCard';
import PhotoModal from 'components/PhotoModal';
import PhotoModalSuccess from 'components/PhotoModalSuccess';
import AddEmpresaModal from 'components/AddEmpresaModal';
import AddEmpresaModalSuccess from 'components/AddEmpresaModalSuccess';
import AddPlantioModal from 'components/AddPlantioModal';
import AddPlantioModalSuccess from 'components/AddPlantioModalSuccess';

import { Container, Header, Title, TableDiv, CardsDiv, SubContainer } from './styles';

import { columns, fakeData } from './utils';

const AdmMainPage = () => {
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
    //manda o post da foto
    console.log('faz post nas fotos')
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
          <Table
            data={fakeData}
            columns={columns}
            title={'Empresas'}
            actions={[]}
            handleAddEmpresa={handleModalAddEmpresa}
          />
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