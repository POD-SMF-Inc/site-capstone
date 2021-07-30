import "./Favorite.css"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
export default function Favorites( { user, setUser }) {

  if (!user?.username) {
    return <NotAuthorized user={user} setUser={setUser}/>
} 
	return (
		<div className="FavoritesPage">
			<h1>In Favorites</h1>
		</div>
	)
}
/*import React, { useState, useEffect } from 'react';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';


import './Favorites.css';


function Favorites ( { user, setUser })  {

    
  const  {favs}  = useContext(LocalDataContext);

  if (!user?.username) {
    return <NotAuthorized user={user} setUser={setUser}/>
} 

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      {favs.length ? (
        <div className="favorites-list">
          {favs.map((fav) => (
            <MealList key={fav.id} mealData={fav} />
          ))}
        </div>
      ) : (
        <div className="empty-fav-list">
          <div className="empty-message">
            <span>You don't have any favorite recipes yet!</span>
          </div>

          <img
            className="heart-logo"
            src={HeartLogo}
            alt="heart"
          ></img>
        </div>
      )}
    </div>
  );
}

export default Favorites;*/
