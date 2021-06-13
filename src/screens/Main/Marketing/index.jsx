import React, { useState, useEffect } from 'react';

import SearchBox from 'components/SearchBox';
import TableAddButton from 'components/TableAddButton';
import FolderCard from 'components/FolderCard';

import documentPlaceholder from 'assets/Images/documentPlaceholder.png';

import { fetchArchives } from 'services/archives';

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
  const [archives, setArchives] = useState(false);

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

  return(
    <Container>
      <Header>
        <Title>{'Marketing'}</Title>
        <SubTitle>{'Mostre que sua empresa está preocupada em construir um mundo melhor!'}</SubTitle>
      </Header>
      <SubView>
        <SearchView>
          <SearchBox />
          <TableAddButton />
        </SearchView>
        <FoldersView>
          {archives.length > 0 && archives.map(item => <FolderCard type={item.type} data={item.data} title={item.title || 'sem título'} />)}
        </FoldersView>
      </SubView>
    </Container>
  )
}

export default MarketingPage;