import React from 'react';

import { UserProvider } from './context/users';
import Dashboard from './pages/Dashboard';
import { LoadingProvider } from './pages/Dashboard/context/loading';
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
