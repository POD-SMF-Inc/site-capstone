import React, { useEffect, useReducer } from 'react';

import { AppActionTypes } from './app.types';
import LocalDataContext from './LocalDataContext';
import LocalDataReducer from './LocalDataReducer';

const {
    ADD_FAV,
    REMOVE_FAV,
} = AppActionTypes;

const LocalDataState = props => {

    // Initial State
    const initialState = {
        favs: JSON.parse(localStorage.getItem("favs")) || [],
        
    }

    // Use Reducer
    const [state, dispatch] = useReducer(LocalDataReducer, initialState);

    // Pull data from local storage
    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs])

    // Add to Favorites
    const addFav = fav => dispatch({
        type: ADD_FAV,
        payload: fav
    })

    // Remove from Favorites
    const removeFav = id => dispatch({
        type: REMOVE_FAV,
        payload: id
    })



    return <LocalDataContext.Provider
        value={{
            
            favs: state.favs,
            addFav,
            removeFav,
        }}
    >
        {props.children}
    </LocalDataContext.Provider>
}

export default LocalDataState;