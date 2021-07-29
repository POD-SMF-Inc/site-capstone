import { AppActionTypes } from './app.types';

const {
    
    ADD_FAV,
    REMOVE_FAV,

} = AppActionTypes;

const fn = (state, action) => {
    switch(action.type) {
        
    case ADD_FAV:
        return {
            ...state,
            favs: [...state.favs, action.payload]
        };
    case REMOVE_FAV:
        return {
            ...state,
            favs: state.favs.filter(fav => fav.id !== action.payload)
        };
    
        
    default:
        return state;
    }
};
export default fn;