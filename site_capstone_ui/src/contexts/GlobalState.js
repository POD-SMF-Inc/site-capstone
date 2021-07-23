import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  
  faves: JSON.parse(localStorage.getItem('faves')) || [],
  recipes: null,
  loading: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    
    localStorage.setItem('faves', JSON.stringify(state.faves));
  }, [ state.faves]);

  // Actions
  
  function deleteFave(id) {
    dispatch({
      type: 'DELETE_FAVE',
      payload: id,
    });
  }
  function addFave(fave) {
    dispatch({
      type: 'ADD_FAVE',
      payload: fave,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        faves: state.faves,
        deleteFave,
        addFave,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};