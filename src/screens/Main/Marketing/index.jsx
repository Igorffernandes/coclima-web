import React, { useState } from 'react';

import SearchBox from 'components/SearchBox';
import TableAddButton from 'components/TableAddButton';
import FolderCard from 'components/FolderCard';
import ArchiveModal from 'components/ArchiveModal';

import documentPlaceholder from 'assets/Images/documentPlaceholder.png';

import { Container, Header, Title, SubTitle, SubView, SearchView, FoldersView } from './styles';

const fakeData = [
  {
    title: 'Panfleto informativo',
    image: null,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: null,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  },
  {
    title: 'Panfleto informativo',
    image: null,
  },
  {
    title: 'Panfleto informativo',
    image: documentPlaceholder,
  }
];

const MarketingPage = () => {
  const [modalArchive, setModalArchive] = useState(false)

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
          {fakeData.map(item => <FolderCard image={item.image} title={item.title} />)}
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