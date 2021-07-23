import React, { useContext } from 'react';
import LocalDataContext from '../../contexts/LocalDataContext';
import  HeartLogo  from '../../assets/heart.png';
import MealList from "../Planner/MealList";


import './Favorites.css';


function Favorites ()  {
    
  const  {favs}  = useContext(LocalDataContext);

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

export default Favorites;
