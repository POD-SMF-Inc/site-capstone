import APIR from '../../services/apiCalls'
import "./FavorRoute.css"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export default function FavorRoute(element)
{
    const [recipe, setRecipe ] = useState({})

    return (
        <div className="FavorRoute">
            <div className="favContent">
                <div className="favTitle"> 
                    <h1>{element.element.title}</h1>
                </div>
                <div className="favPic">
                    <img src={element.element.picture} alt={`pic of ${element.element.title}`}></img>
                </div>
                <div className="detailPageBtn">
                    <Link to={`/details/${element.element.food_id}`}><button>Go to Recipe</button></Link>
                </div>
            </div>
        </div>
    )
}