import "./Favorite.css"
import HeartLogo from '../../assets/heart2.png'
import apiClient from "../../services/apiClient"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom" ;
import FavoritesInfo from "../FavoritesInfo/FavoritesInfo"
import Loader from "react-loader-spinner";
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import FavoritesPart from "../FavoritesPart/FavoritesPart"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Favorites({ user, setAppState }) {
  const [ favorites, setFavorites ] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  
  useEffect(() => {
    console.log("in here")
    const fetchFavorites = async () => {
      // setIsLoading(true)
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
      setIsLoading(false)
    }
    if (user?.username)
    {
      setTimeout(fetchFavorites, 500)
      // fetchFavorites()
    }
      
  }, [])

  if (!user?.username) {
    console.log("user in favorites: ", user)
    return <NotAuthorized user={user} setAppState={setAppState}/>
  } 

  console.log("favorites: ", favorites.length)
  const renderFavorites = () => {
    if (isLoading)
    {
        return (
            <div className="Loading">
            <Loader 
            type="Circles" 
            color="#00BFFF" 
            height={80} 
            width={80}
            timeout={30000} //3 secs
            />
            </div>
            // <Loader
            //   type="Puff"
            //   color="#00BFFF"
            //   height={100}
            //   width={100}
            //   timeout={3000} //3 secs
            // />
          );
    }
    return (
      <div className="FavoritesPage">
        <span >Your Favorite Recipes</span>
        <span align= 'center'> View your favorite recipes here! You can favorite and remove recipes from favorites by clicking on the recipe details. </span>
        {favorites.length !== 0? (
          <div className="favorites-list">
            <FavoritesInfo favorites={favorites} />
          </div>
        ) : (
          <div className="empty">
          <div className="message is-danger  ">
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
      
    )
  }
  console.log("FaavoritesPage: ", favorites)
  return (
    <div className="mainfavPage">
      {renderFavorites()}
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
