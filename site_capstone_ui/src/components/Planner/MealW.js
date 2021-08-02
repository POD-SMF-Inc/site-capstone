import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function MealW ({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
 

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e892ed26f6334d0d97339898d12fd2a9&includeNutrition=false`
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
    <article1>
      <h2>{meal.title}</h2>
      <img src={imageUrl} alt="recipe" />
    
      <div className="detailPageP">
         <Link to={`/details/${meal.id}`}><button className="button is-warning is-light is-outlined">Go to Recipe</button></Link>
      </div>

    </article1>
  );
}