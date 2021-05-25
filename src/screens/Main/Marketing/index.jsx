import React from 'react';

import SearchBox from 'components/SearchBox';
import TableAddButton from 'components/TableAddButton';
import FolderCard from 'components/FolderCard';

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
          {fakeData.map(item => <FolderCard image={item.image} title={item.title} />)}
        </FoldersView>
      </SubView>
    </Container>
  )
}

export default MarketingPage;