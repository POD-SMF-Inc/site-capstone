import { useState } from "react"
import "./FavoritesInfo.css"
import FavorRoute from "../FavorRoute/FavorRoute"
export default function FavoritesInfo(favorites) {
    console.log("favorites: ", favorites)
    //const [ recipeId, setRecipeId] = useState(0)
    //setRecipeId(favorites?.favorites?.food_id)
    return (
        <div className="FavoritesInfo">
            {
                favorites?.favorites?.map(element => (
                    <>
                        <FavorRoute element={element} />
                        {/* <h1>{element.title}</h1> */}
                    </>
                ))
            }
        </div>
    )
}