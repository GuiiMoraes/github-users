import api from './api';

const getUsers = async username => {
  const response = await api.get(`/users/${username}`);
  return response;
};

export default getUsers;
