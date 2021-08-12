import "./HomeRL.css"
import React, {useContext} from 'react';
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HomeRL({ element })
{

  const context = useContext(ThemeContext);
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

    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      
    const priceFormat = (amount) => {
        return `$${formatter.format(amount)}`
      }
    return (
      <div className={`SeperateRecipe ${theme2}`}>
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
