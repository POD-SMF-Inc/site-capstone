import "./Favorite.css"
import HeartLogo from '../../assets/heart2.png'
import apiClient from "../../services/apiClient"
import { useState, useEffect, useContext } from "react"
import FavoritesInfo from "../FavoritesInfo/FavoritesInfo"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Favorites({ user }) {
  const [ favorites, setFavorites ] = useState([])
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data, error } = await apiClient.getFavs()
        if (data)
        {
          console.log("data Favors: ", data.favorites)
          setFavorites(data.favorites)
        }
      }
      catch(error)
      {
        console.log(error)
      }
    }
    fetchFavorites()
  }, [])

  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

  const ThemeToggler = (props) => {
      const context = useContext(ThemeContext);
      const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
      const toggleTheme = context.toggleTheme;
    
      return (
        <button className={`button is-light rounded`} onClick={toggleTheme}>
          {btnText}
        </button>
      );
    };

  return (
    <div className={`fav ${theme} `}>
    <div className={theme}>
    <ThemeToggler />
		<div className={`FavoritesPage ${theme}`}>
			<span >In Favorites</span>
      <span align= 'center'> View your favorite recipes here! You can favorite and remove recipes from favorites by clicking on the recipe details. </span>
      {favorites.length ? (
        <div className="favorites-list">
          <FavoritesInfo favorites={favorites} />
        </div>
      ) : (
        <div className="empty">
        <div className={`message is-danger ${theme2}`}>
          <div className="message-body  ">
          <strong>You don't have any favorite recipes yet!</strong>
            <div>
              <img
                 className="heart-logo"
                 src={HeartLogo}
                 alt="heart"
              ></img>
           </div>
        </div>
       
        </div>
        </div>
        
      )}
    </div>
		</div>
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
