const ar = (state, action) => {
    switch (action.type) {
      
      case 'DELETE_FAVE':
        return {
          ...state,
          faves: state.faves.filter((fave) => fave.id !== action.payload),
        };
      case 'ADD_FAVE':
        return {
          ...state,
          faves: [...state.faves, action.payload],
        };
      default:
        return state;
    }
  };

  export default ar;