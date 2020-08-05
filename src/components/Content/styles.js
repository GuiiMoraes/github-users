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
  @media (min-width: 768px), (min-width: 683px) and (min-height: 664px) {
    justify-content: flex-start;

    div.card {
      width: calc(100vh / 3.6);

      img {
        width: 70px;
        height: 70px;
      }

      strong {
        font-size: 1rem;
      }

      span {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 1400px), (min-width: 960px) and (min-height: 976px) {
    justify-content: flex-start;

    div.card {
      width: calc(100vh / 3.7);

      img {
        width: 100px;
        height: 100px;
      }

      strong {
        font-size: 1.1rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`;
