import "./SeperateRecipe.css"
import { Link } from "react-router-dom"
export default function SeperateRecipe({ element })
{

    console.log("Element: ", element)

    

    return (
        <div className="SepReci">
            <div className="content">
                {/* <h2>{element.id}</h2> */}
                <div className="recipeTitle">
                    <h1>{element.title}</h1>
                </div>
                <div className="Picture">
                    <img src={element.image} alt="Meal"></img>
                </div>
                
                <div className="detailPage">
                    <Link to={`/details/${element.id}`}><button className="button is-warning is-light is-outlined">Go to Recipe</button></Link>
                </div>
            </div> 
        </div>
    )
}

/*<div className="SepReci">
            <p>{element.title}</p>
            <img src={element.image} alt="Smoothie"></img>
        </div> */