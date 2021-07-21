import React from "react"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function SearchRecipeRoute({ randomRecipe }) {
    //console.log("rand: ", randomRecipe)
    //console.log("type: ", typeof(randomRecipe))
    return (
        <div className="SearchRR">
            {
                randomRecipe.map(element => (
                    <>
                        <div className="Sep">
                            <SeperateRecipe element={element} />
                        </div>
                    </>
                ))
            }
            
        </div>
    )
}