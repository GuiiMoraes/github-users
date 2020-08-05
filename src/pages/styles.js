import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 300px;
  min-height: 100vh;

  margin: 2px 4px;
  padding: 8px;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
  }
`;
