import React from 'react';
import { FiAlertCircle, FiTrash2 } from 'react-icons/fi';

import Loading from '../loadingIcon';
import { Container, Card } from './styles';

class Content extends React.Component {
  render() {
    const { loading, usersData, removeUser } = this.props;

    if (loading.loading) {
      return (
        <Container>
          <div className="screen-content">
            <Loading />
          </div>
        </Container>
      );
    }

    if (loading.error) {
      return (
        <Container>
          <div className="screen-content" data-cy="error-message">
            <FiAlertCircle size={50} color="#333333" />
            <p>{loading.errorMessage || 'Unexpected error'}</p>
          </div>
        </Container>
      );
    }

    return (
      <Container>
        {usersData.length ? (
          usersData?.map(user => (
            <Card key={user.id} data-cy="user-card">
              <button
                type="submit"
                onClick={() => removeUser(user.id)}
                data-cy="delete-user"
              >
                <FiTrash2 size={16} />
              </button>
              <img
                src={user.avatar_url}
                alt={`avatar of ${user.name}`}
                data-cy="user-avatar"
              />
              <div className="user-content">
                <strong data-cy="user-name">{user.name}</strong>
                <small data-cy="user-login">{user.login}</small>
                <span data-cy="user-bio">{user.bio}</span>
              </div>
              <a
                href={user.html_url}
                _target="blank"
                noreferrer="true"
                noopener="true"
                data-cy="user-profile-link"
              >
                Go to profile
              </a>
            </Card>
          ))
        ) : (
          <div className="screen-content" data-cy="no-users-message">
            <p>Use text input to search by an user.</p>
          </div>
        )}
      </Container>
    );
  }
}

export default Content;
