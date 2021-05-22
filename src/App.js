import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import Sidebar from 'components/Sidebar';

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
