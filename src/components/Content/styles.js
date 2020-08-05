import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  padding: 10px;

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
  }

  div.card {
    display: flex;
    flex-direction: column;

    width: calc(50% - 5px);
    height: 240px;

    margin: 2.5px;
    padding: 8px;

    background-color: #fff;

    border: 1px solid #e1e4e8;
    border-radius: 6px;

    text-align: left;

    p {
      text-align: center;
    }

    img {
      width: 60px;
      height: 60px;

      margin: auto;

      border-radius: 50%;
    }

    strong {
      font-size: 0.9rem;
      width: 100%;
    }

    span {
      text-align: left;
      width: 100%;
      font-size: 0.8rem;
    }

    small {
      color: #666666;
      width: 100%;
    }
  }
`;
