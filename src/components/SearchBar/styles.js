import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 20px);
  height: 32px;

  padding: 10px;
  margin-top: 10px;

  border-radius: 6px;
  border: 1px solid #e1e4e8;

  background-color: #fafbfc;

  input {
    background-color: transparent;
    border: none;
    color: #586069;
  }

  &:hover,
  &:focus {
    border: 1px solid #9ba5b1;

    svg {
      color: #333333;
    }
  }
`;
