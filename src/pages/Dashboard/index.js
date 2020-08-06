import React from 'react';

import Content from '../../components/Content';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Container from './styles';

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <Content />
      </Container>
    </>
  );
}

export default Dashboard;
