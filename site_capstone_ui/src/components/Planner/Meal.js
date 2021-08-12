import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Meal ({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  const key = 'e892ed26f6334d0d97339898d12fd2a9';
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;

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

  return (
    <article className={`${theme}`}>
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
