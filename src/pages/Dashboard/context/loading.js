import React, { createContext, useState, useCallback } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: false,
    errorName: '',
  });

  const handleLoadingState = useCallback(state => {
    setLoadingState(state);

    if (state.error) {
      const timer = setTimeout(() => {
        setLoadingState({ loading: false, error: false, errorName: '' });
      }, 2000);

      return () => clearTimeout(timer);
    }

    return false;
  }, []);

  return (
    <LoadingContext.Provider value={{ loadingState, handleLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};
