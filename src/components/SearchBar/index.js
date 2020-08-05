import React from 'react';

import './styles.css';

function SearchBar({ user, handleChangeUser }) {
  return (
    <input
      type="text"
      onChange={e => handleChangeUser(e.target.value)}
      value={user}
    />
  );
}

export default SearchBar;
