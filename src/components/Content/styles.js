import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
  width: 100%;

  padding: 10px;

  div.screen-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px), (min-width: 683px) and (min-height: 664px) {
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: row;
  }
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 500px;

  margin: 8px;
  padding: 8px;

  background-color: #fff;

  border: 1px solid #e1e4e8;
  border-radius: 6px;

  text-align: left;

  img {
    width: 65px;
    height: 65px;

    margin: auto;

    border-radius: 50%;
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;

    color: inherit;

    transition: color 0.2s ease-out;

    &:hover {
      color: tomato;
    }
  }

  a {
    width: 100%;
    height: 35px;

    text-align: center;

    text-decoration: none;

    font-size: 13px;
    line-height: 20px;

    padding: 5px 16px;
    margin-top: 6px;

    color: #24292e;
    background-color: #fafbfc;

    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;

    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
      inset 0 1px 0 hsla(0, 0%, 100%, 0.25);

    transition: border 0.2s ease-in-out;

    &:hover {
      border: 1px solid #9ba5b1;
    }
  }

  .user-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 75%;

    margin-left: 10px;

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
    max-width: calc(50%);
    min-height: 140px;

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

  @media (min-width: 1400px), (min-width: 960px) and (min-height: 976px) {
    max-width: calc(33%);

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
`;
