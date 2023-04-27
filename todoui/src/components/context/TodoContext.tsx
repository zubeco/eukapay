import React, { createContext, useState } from 'react';

interface TodoContextState {
  shouldRefetch: boolean;
  toggleRefetch: () => void;
}

export const TodoContext = createContext<TodoContextState>({
  shouldRefetch: false,
  toggleRefetch: () => {},
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false);

  const toggleRefetch = (): void => {
    setShouldRefetch(!shouldRefetch);
  };

  const value = {
    shouldRefetch,
    toggleRefetch,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
