import React from 'react';

import { ReactComponent as Loading } from '../../assets/loading.svg';
import Container from './styles';

function loadingIcon() {
  return (
    <Container data-cy="loading-icon">
      <Loading />
    </Container>
  );
}

export default loadingIcon;
