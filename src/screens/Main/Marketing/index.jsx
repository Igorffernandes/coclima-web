import React, { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
import TableAddButton from 'components/TableAddButton';
import FolderCard from 'components/FolderCard';
import ItemCard from 'components/ItemCard';
import ArchiveModal from 'components/ArchiveModal';
import AddFolderModal from 'components/AddFolderModal';

import { deleteArchive, fetchMarketing, fetchMarketingItens } from 'services/archives';

import { Container, Header, Title, SubTitle, SubView, SearchView, FoldersView, BackButton } from './styles';

const MarketingPage = () => {
  const [archives, setArchives] = useState(false);
  const [modalArchive, setModalArchive] = useState(false);
  const [modalFolder, setModalFolder] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [pageTitle, setPageTitle] = useState('Marketing');

  const handleModal = async () => {
    if (pageTitle === 'Marketing') {
      setModalFolder(!modalFolder);
      fetchArchivesData();
    } else {
      setModalArchive(!modalArchive);
      handleOpenFile(pageTitle);
    }
  }

  const fetchArchivesData = async () => {
    setPageTitle('Marketing');
  
    try{
      const archivesFetch = await fetchMarketing();
      setArchives(archivesFetch);
    } catch(err){
      console.log(err);
    }
  }

  const handleOpenFile = async (fileName) => {
    setPageTitle(fileName)
    try{
      const archivesFetch = await fetchMarketingItens(fileName);
      setArchives(archivesFetch);
    } catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchArchivesData();
  }, [])

  useEffect(() => {
    if(searchText.length > 3){
      const responseDaBusca = archives.filter(item => String(item.name).toLowerCase().includes(searchText.toLowerCase()));
      setArchives(responseDaBusca);
    }
    if(searchText.length === 0){
      if (pageTitle === 'Marketing') {
        fetchArchivesData();
      }else {
        handleOpenFile(pageTitle)
      }
    }
  }, [searchText]);

  useEffect(() => {
    if(modalArchive === false){
      fetchArchivesData();
    }
  }, [modalArchive])

  const handleDelete = async (id, title = null) => {
    await deleteArchive(id);

    if (title) {
      handleOpenFile(title);
    }else {
      fetchArchivesData();
    }
  }

  return(
    <Container>
      <Header>
        <Title>{pageTitle}</Title>
        {pageTitle === 'Marketing' ? 
          (<SubTitle>{'Mostre que sua empresa está preocupada em construir um mundo melhor!'}</SubTitle>) :
          (<BackButton onClick={fetchArchivesData}>Voltar</BackButton>)
        }
      </Header>
      <SubView>
        <SearchView>
          <SearchBox value={searchText} setValue={setSearchText}/>
          <TableAddButton handleClick={handleModal}/>
        </SearchView>
        {pageTitle === 'Marketing' ? (<FoldersView>
          {archives.length > 0 && archives.map(item => <FolderCard item={item} onPressDelete={handleDelete} onPressOpen={(item) => handleOpenFile(item)} type={item.type} data={item.data} title={item.name || 'sem título'} />)}
        </FoldersView>) :
        (<FoldersView>
          {archives.length > 0 && archives.map(item => <ItemCard item={item} onPressDelete={handleDelete} type={item.type} data={item.data} title={item.name || 'sem título'} />)}
        </FoldersView>)}
      </SubView>
      {modalArchive &&
        <ArchiveModal 
          visible={modalArchive}
          title={pageTitle}
          onClose={handleModal}/>
      }
      {modalFolder &&
        <AddFolderModal 
          visible={modalFolder}
          onClose={handleModal}/>
      }
    </Container>
  )
}

export default MarketingPage;