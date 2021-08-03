import React, { useState, useEffect } from "react";
//import Favorites from '../FavoriteComponent/FavoriteComponent';
//import FavHeart from '../FavHeart/FavHeart';
import { Link } from "react-router-dom"

export default function Meal ({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  //const FavoriteComponent = meal.favouriteComponent;
  //const Favorites = meal.favouriteComponent;
  const key = 'b7a72b6d08ad4c77ae76c76192ee3ae1';

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${key}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  /*const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const priceFormat = (amount) => {
    return `$${formatter.format(amount)}`;
  };*/

  return (
    <article>
      <h2>{meal.title}</h2>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      
      </ul>

      <div className="detailPageP">
         <Link to={`/details/${meal.id}`}><button className="button is-warning is-light is-outlined ">Go to Recipe</button></Link>
      </div>

    </article>
  );
}
//<FavHeart className='fave-heart' meal={meal} />
//7abfa1a217ad4d16b972b6c7428d92b6
/**<div
          onClick={() => meal.handleFavouritesClick(meal)}
          className="overlay d-flex align-items-center justify-content-center"
        >
          <FavoriteComponent />
        </div> */

//<button type = 'button' onClick ={() => meal.handleFavoritesClick(meal)}> ❤️</button>

/*const Meal = (meal) => {

  const [imageUrl, setImageUrl] = useState("");
  const FavoriteComponent = meal.favouriteComponent;
  //const Favorites = meal.favouriteComponent;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=7abfa1a217ad4d16b972b6c7428d92b6&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <>
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
      <div
          onClick={() => meal.handleFavouritesClick(meal)}
          className="overlay d-flex align-items-center justify-content-center"
        >
          <FavoriteComponent />
        </div>

    </article>
    </>
  );
}

export default Meal;
*/