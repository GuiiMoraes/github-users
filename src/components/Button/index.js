import React from 'react';
import { FiSearch } from 'react-icons/fi';

import ButtonContainer from './styles';

function Button({ handleSearch }) {
  return (
    <ButtonContainer type="button" onClick={handleSearch}>
      <FiSearch size={16} />
    </ButtonContainer>
  );
}

export default Button;
