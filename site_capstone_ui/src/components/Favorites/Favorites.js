/*import React, { useState, useEffect } from 'react';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const Favorites = () => {
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
		const foodFavourites = JSON.parse(
			localStorage.getItem('recipe-book-favourites')
		);

		if (foodFavourites) {
			setFavourites(foodFavourites);
		}
	}, []);
    
    const saveToLocalStorage = (items) => {
		localStorage.setItem('recipe-book-favourites', JSON.stringify(items));
	};

    const addFavourite = (element) => {
		const newFavouriteList = [...favourites, element];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavourite = (element) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.element !== element.element
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
}*/