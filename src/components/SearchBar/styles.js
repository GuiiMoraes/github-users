import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 20px);
  height: 32px;

  padding: 0 10px;
  margin-top: 10px;

  border-radius: 6px;
  border: 1px solid #e1e4e8;

  background-color: #fafbfc;

  transition: border 0.2s, color 0.2s;

  input {
    width: 100%;
    height: 100%;
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
