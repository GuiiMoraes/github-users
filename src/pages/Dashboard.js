import React, { useContext } from 'react';

import Content from '../components/Content';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { UserContext } from '../context/users';
import { LoadingContext } from './context/loading';
import Container from './styles';

function Dashboard() {
  const { loadingState } = useContext(LoadingContext);
  const { usersData, removeUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <Content
          loading={loadingState}
          usersData={usersData}
          removeUser={removeUser}
        />
      </Container>
    </>
  );
}

export default Dashboard;
