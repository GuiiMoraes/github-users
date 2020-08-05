/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import Loading from '../loadingIcon';
import Container from './styles';

class Content extends React.Component {
  render() {
    const { userData, loading } = this.props;

    if (loading.init) {
      return (
        <Container>
          <div className="content">
            <p>Use text input to search by an user.</p>
          </div>
        </Container>
      );
    }

    if (loading.loading) {
      return (
        <Container>
          <div className="content">
            <Loading />
          </div>
        </Container>
      );
    }

    if (loading.error) {
      return (
        <Container>
          <div className="content">
            <FiAlertCircle size={50} color="#333333" />
            <p>{loading.errorMessage || 'Unexpected error'}</p>
          </div>
        </Container>
      );
    }

    return (
      <Container>
        {userData?.map(user => (
          <div className="card" key={user.id}>
            <img src={user.avatar_url} alt={`avatar of ${user.name}`} />
            <strong>{user.name}</strong>
            <small>{user.login}</small>
            <span>{user.bio}</span>
          </div>
        ))}
      </Container>
    );
  }
}

export default Content;
