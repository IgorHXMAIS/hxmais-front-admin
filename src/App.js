import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks/index';

import Routes from './routes';
import GlobalStyles from './styles/global';
import FontStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <FontStyles />

      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
