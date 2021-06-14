import React, { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
import TableAddButton from 'components/TableAddButton';
import FolderCard from 'components/FolderCard';
import ArchiveModal from 'components/ArchiveModal';

import { fetchArchives } from 'services/archives';

import { Container, Header, Title, SubTitle, SubView, SearchView, FoldersView } from './styles';

const MarketingPage = () => {
  const [archives, setArchives] = useState(false);
  const [modalArchive, setModalArchive] = useState(false)

  const fetchArchivesData = async () => {
    try{
      const archivesFetch = await fetchArchives();
      setArchives(archivesFetch);
    } catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchArchivesData();
  }, [])

  useEffect(() => {
    if(modalArchive === false){
      fetchArchivesData();
    }
  }, [modalArchive])
  
  function handleModalArchive() {
    setModalArchive(!modalArchive)
  }

  return(
    <Container>
      <Header>
        <Title>{'Marketing'}</Title>
        <SubTitle>{'Mostre que sua empresa está preocupada em construir um mundo melhor!'}</SubTitle>
      </Header>
      <SubView>
        <SearchView>
          <SearchBox />
          <TableAddButton handleClick={handleModalArchive}/>
        </SearchView>
        <FoldersView>
          {archives.length > 0 && archives.map(item => <FolderCard type={item.type} data={item.data} title={item.name || 'sem título'} />)}
        </FoldersView>
      </SubView>
      {modalArchive &&
        <ArchiveModal 
          visible={modalArchive} 
          onClose={handleModalArchive}/>
      }
    </Container>
  )
}

export default MarketingPage;