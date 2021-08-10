import React, { useEffect, useState } from 'react';

import { Container, Header, Title, SubView, FoldersView } from './styles';
import ItemCard from 'components/ItemCard';
import ConfirmDeleteModal from 'components/ConfirmDeleteModal';

import { fetchArchives, deleteArchive } from 'services/archives';

const Photo = () => {

  const [archives, setArchives] = useState([]);
  const [modal, setModal] = useState({
    open: false,
  });

  const fetchArchivesData = async () => {
    try{
      const archivesFetch = await fetchArchives({type: 'image'});
      setArchives(archivesFetch);
    } catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchArchivesData();
  }, [])

  const functionToDeleteArchive = async () => {
    try{
      await deleteArchive(modal.id || 0);
      await fetchArchivesData();
      setModal({...modal, open: false})
    } catch(err){
      console.log(err);
    }
  }

  return(
    <Container>
      <Header>
        <Title>{'Fotos'}</Title>
      </Header>
      <SubView>
        <FoldersView>
          {archives.length > 0 && archives.map(item => 
            <ItemCard 
              type={item.type} 
              data={item.data} 
              onPressDelete={() => setModal({...modal, open: true, id: item.id})} 
              title={item.name || 'sem título'}
            />)}
        </FoldersView>
      </SubView>
      <ConfirmDeleteModal 
        open={modal.open} 
        handleClose={() => setModal({...modal, open: false})} 
        onPressDelete={async () => functionToDeleteArchive()}
      />
    </Container>
  );
}

export default Photo;