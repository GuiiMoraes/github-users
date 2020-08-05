import React from 'react';
import { FiSearch } from 'react-icons/fi';

import ButtonContainer from './styles';

function Button({ handleSearch }) {
  return (
    <ButtonContainer type="button" onClick={handleSearch}>
      <FiSearch />
    </ButtonContainer>
  );
}

export default Button;
