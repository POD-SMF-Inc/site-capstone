import "./HomeRL.css"
import React from 'react';
import { Link } from "react-router-dom"

export default function HomeRL({ element })
{
    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      
    const priceFormat = (amount) => {
        return `$${formatter.format(amount)}`
      }
    console.log("Element Home: ", element)
    //const FavouriteComponent = element.favouriteComponent;
    return (
      /* <articleH>
            <h1>{element.title}</h1>
            <img src={element.image} alt="Smoothie"></img>
            <a href={element.sourceUrl}>Go to Recipe</a>
        </articleH>
        */
      <div className="SeperateRecipe">
        <h2>{element.title}</h2>
        <img src={element.image} alt="food_img"></img>
        <ul className="instructions">
          <li>Preparation time: {element.readyInMinutes} minutes</li>
          <li>Number of servings: {element.servings}</li>
          <li>Price per serving: {priceFormat(element.pricePerServing/100)}</li>
        </ul>
        <div className="detailPageP">
         <Link to={`/details/${element.id}`}><button className="button is-warning is-light is-outlined">Go to Recipe</button></Link>
      </div>
        
      </div>
    );
}

/*
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article> */

    /*<div className="SeperateRecipe">
            <div className="RecipeTitle">
                <h1>{element.title}</h1>
            </div>
            <div className="Picture">
                <img src={element.image} alt="Smoothie"></img>
            </div>
        </div> */