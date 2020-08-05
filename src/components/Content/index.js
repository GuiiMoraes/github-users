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
          <div className="screen-content">
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
            <Card key={user.id}>
              <button type="submit" onClick={() => removeUser(user.id)}>
                <FiTrash2 size={16} />
              </button>
              <img src={user.avatar_url} alt={`avatar of ${user.name}`} />
              <div className="user-content">
                <strong>{user.name}</strong>
                <small>{user.login}</small>
                <span>{user.bio}</span>
              </div>
              <a
                href={user.html_url}
                _target="blank"
                noreferrer="true"
                noopener="true"
              >
                Go to profile
              </a>
            </Card>
          ))
        ) : (
          <div className="screen-content">
            <p>Use text input to search by an user.</p>
          </div>
        )}
      </Container>
    );
  }
}

export default Content;
