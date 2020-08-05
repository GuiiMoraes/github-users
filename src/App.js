import React from 'react';

import { UserProvider } from './context/users';
import { LoadingProvider } from './pages/context/loading';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <UserProvider>
        <LoadingProvider>
          <Dashboard />
        </LoadingProvider>
      </UserProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
