import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersData, setUsersData] = useState(() => {
    const users = localStorage.getItem('@GitHub:users');

    if (users) return JSON.parse(users);

    return [];
  });

  const addUser = useCallback(
    username => {
      const userAlreadyExist = usersData.find(user => user.id === username.id);

      if (userAlreadyExist) {
        return;
      }

      const users = [...usersData, username];

      localStorage.setItem('@GitHub:users', JSON.stringify(users));
      setUsersData(users);
    },
    [usersData]
  );

  const removeUser = useCallback(
    userID => {
      const users = usersData.filter(user => user.id !== userID);

      localStorage.setItem('@GitHub:users', JSON.stringify(users));
      setUsersData(users);
    },
    [usersData]
  );

  return (
    <UserContext.Provider value={{ usersData, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
