/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';

import Container from './styles';

import Loading from '../loadingIcon';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props?.loading.init) {
      return (
        <Container>
          <h1>Users</h1>
          <p>Insert your user</p>
        </Container>
      );
    }

    if (this.props?.loading.loading) {
      return (
        <Container>
          <h1>Users</h1>
          <Loading />
        </Container>
      );
    }

    if (this.props?.loading.error) {
      return (
        <Container>
          <h1>Users</h1>
          <p>{this.props?.loading.errorMessage || 'Unexpected error'}</p>
        </Container>
      );
    }

    return (
      <Container>
        <h1>Users</h1>
        {this.props?.userData.map(user => (
          <>
            <img
              src={this.props?.userData.avatar_url}
              alt={`avatar of ${this.props?.userData.name}`}
            />
            <strong key={this.props?.userData.id}>
              {this.props?.userData.name}
            </strong>
            <small>{this.props?.userData.bio}</small>
          </>
        ))}
      </Container>
    );
  }
}

export default Content;
