import api from './api';

export const getUsers = async username => {
  const response = await api.get(`/users/${username}`);
  return response;
};
