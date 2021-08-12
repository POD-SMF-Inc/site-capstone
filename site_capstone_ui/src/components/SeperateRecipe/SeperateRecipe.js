import "./SeperateRecipe.css"
import { Link } from "react-router-dom"
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SeperateRecipe({ element })
{
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
    

    return (
        <div className={`sep ${theme} `}>
        
        <div className={`SepReci  `}>
            <div className={`details  ${theme2}`}>
                <div className={`recipeTitle ${theme2}`}>
                    <h1>{element.title}</h1>
                </div>
                <div className="Picture">
                    <img src={element.image} alt="Meal"></img>
                </div>
                
                
                <div className="detailPage">
                    <Link to={`/details/${element.id}`}><button id="go-to" className="button is-warning is-light is-outlined">Go to Recipe</button></Link>
                </div>
            </div> 
        </div>
        </div>
      
    )
}
