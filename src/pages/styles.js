import styled, { keyframes } from 'styled-components';

import background from '../assets/background.svg';

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: calc(100vh - 50px);

  animation: ${opacityAnimation};
  animation-duration: 1s;
  animation-timing-function: linear;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
`;
