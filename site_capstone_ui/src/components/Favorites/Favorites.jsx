/*import React, { useState, useEffect } from 'react';
import AddFavorites from './AddFavorites';
import RemoveFavorites from './RemoveFavorites';
import Meal from "../Planner/Meal";
import PageH from '../PageH/PageH'

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [meal, setMeal] = useState([]);


    useEffect(() => {
		const foodFavorites = JSON.parse(
			localStorage.getItem('recipe-book-favourites')
		);

		if (foodFavorites) {
			setFavorites(foodFavorites);
		}
	}, []);
    
    const saveToLocalStorage = (items) => {
		localStorage.setItem('recipe-book-favorites', JSON.stringify(items));
	};

    const addFavorite = (meal) => {
		const newFavoriteList = [...favorites, meal];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavorite = (meal) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.meal !== meal.meal
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};


return (
    <div className='container-fluid favorites'>
        <div className='row'>
            <Meal
                meal={meal}
                handleFavoritesClick={addFavorite}
                favoriteComponent={AddFavorites}
            />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
        <PageH sectionName='Favorites'/>
        </div>
        <div className='row'>
            <Meal
                meal={favorites}
                handleFavoritesClick={removeFavorite}
                favoriteComponent={RemoveFavorites}
            />
        </div>
    </div>
);
};

export default Favorites;


*/
/*let favoriteArray;
    const favoriteRecipesDownloadProgress = document.getElementById("favorite_recipes_download_progress");
    const favoriteRecipesStatusText = document.getElementById("favorite_recipes_status_text");
    const favoriteRecipesSection = document.getElementById("favorite_recipes_section");

    class Favorites {
    
        getFavoriteRecipes() {
            while (favoriteRecipesContainer.firstChild) {
              favoriteRecipesContainer.removeChild(favoriteRecipesContainer.firstChild);
            }
            if (!(localStorage.getItem('favoriteArray')) || localStorage.getItem('favoriteArray') === "[]") {
              emptyFavoriteTextContainer.className = "d-flex justify-content-center";
              return;
            }
            favoriteRecipesSection.className = "favorite-recipes-visible d-flex flex-column justify-content-center"
            emptyFavoriteTextContainer.className = "d-none";
            favoriteRecipesDownloadProgress.className = "favorite-recipe-progress-visible mt-3"
            favoriteRecipesStatusText.className = "text-center";
            favoriteArray = JSON.parse(localStorage.getItem('favoriteArray'));
            let stringifiedArray = favoriteArray.join(",");
            let spoonacularURL = `https://api.spoonacular.com/recipes/informationBulk?ids=${stringifiedArray}&apiKey=${spoonacularAPIKey}&includeNutrition=true&size=636x393`
            $.ajax({
              method: "GET",
              url: spoonacularURL,
              headers: {
                "Content-Type": "application/json"
              },
              timeout: 10000,
              error: this.handleGetFavoriteRecipesError,
              success: this.handleGetFavoriteRecipesSuccess
            })
          }
        
          handleGetFavoriteRecipesSuccess(recipes) {
            this.recipesHandler.displayFavoriteRecipes(recipes);
          }
        
          handleGetFavoriteRecipesError(error) {
            favoriteRecipesDownloadProgress.className = "favorite-recipe-progress-hidden";
            favoriteRecipesStatusText.className = "d-none";
            if (error.statusText === "error") {
              spoonacularFavoriteError.className = "mt-3 text-center";
            }
            if (error.statusText === "timeout") {
              spoonacularFavoriteTimeoutError.className = "mt-3 text-center";
            }
            }
        }


*/
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import LocalDataContext from '../../context/local-data/LocalDataContext';

import { ReactComponent as HeartLogo } from '../../assets/heart.svg';
import CustomButton from '../../components/custom-btn/CustomButton';
import RecipeCard from '../../components/recipe-card/RecipeCard';

import './Favorites.scss';


const Favorites = ({ history }) => {
    
  const { favs } = useContext(LocalDataContext);

  return (
      <div className="favorites-page">
          <h1>Your Favorites</h1>
          {
              favs.length ? 
              (
                  <div className="favorites-list">
                      {
                          favs.map(fav => 
                          <RecipeCard key={fav.id} recipe={fav}/>)
                      }
                  </div>
              ) : (
                  <div className="empty-fav-list">
                      <div className="empty-message">
                          <span>You don't have any favorite recipes yet!</span>
                          <CustomButton onClick={() => history.push('/')}>
                              Back To Your Pantry
                          </CustomButton>
                      </div>

                      <HeartLogo className='heart-logo' />
                      
                  </div>
              )
          }        
      </div>
  );
}

export default withRouter(Favorites);