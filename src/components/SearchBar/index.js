import React from 'react';

import Button from '../Button';
import Container from './styles';

function SearchBar({ user, handleChangeUser, handleSearch }) {
  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Container>
      <input
        type="text"
        onChange={e => handleChangeUser(e.target.value)}
        onKeyPress={handleKeyDown}
        value={user}
      />
      <Button handleSearch={handleSearch} />
    </Container>
  );
}

export default SearchBar;
