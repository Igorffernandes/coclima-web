import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import Sidebar from 'components/Sidebar';
import moment from 'moment'
import 'moment/locale/pt-br'  // without this line it didn't work
moment.locale('pt-br')

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Sidebar />
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
