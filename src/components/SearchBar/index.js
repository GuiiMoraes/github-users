import React, { useState, useContext } from 'react';

import { UserContext } from '../../context/users';
import { LoadingContext } from '../../pages/context/loading';
import { getUsers } from '../../services/api.services';
import Button from '../Button';
import Container from './styles';

function SearchBar() {
  const [textInput, setTextInput] = useState('');

  const { addUser } = useContext(UserContext);
  const { loading, handleLoadingState } = useContext(LoadingContext);

  const handleSearch = async () => {
    handleLoadingState({
      init: false,
      loading: true,
    });

    try {
      const response = await getUsers(textInput);

      setTextInput('');

      addUser(response.data);

      handleLoadingState({
        loading: false,
      });
    } catch (err) {
      handleLoadingState({
        loading: false,
        error: true,
        errorMessage:
          err.response.statusText ||
          'Occurred an error on search, please try again.',
      });
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleChangeTextInput = e => {
    setTextInput(e.target.value);
  };

  return (
    <Container data-cy="search-bar">
      <input
        type="text"
        onChange={handleChangeTextInput}
        onKeyPress={handleKeyDown}
        value={textInput}
      />
      <Button handleSearch={handleSearch} disabled={!!loading?.loading} />
    </Container>
  );
}

export default SearchBar;
