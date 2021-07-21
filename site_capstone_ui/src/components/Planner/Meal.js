import React, { useState, useEffect } from "react";
//import Favorites from '../FavoriteComponent/FavoriteComponent';


export default function Meal ({ meal }) {

  const [imageUrl, setImageUrl] = useState("");
  //const FavoriteComponent = meal.favouriteComponent;
  //const Favorites = meal.favouriteComponent;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1a23b0a94a2a4db3ac2faaa6703f448e&includeNutrition=false`
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
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
      

    </article>
  );
}
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