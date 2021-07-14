import React from "react"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function Practice({ randomRecipe }) {
    console.log("rand: ", randomRecipe)
    console.log("type: ", typeof(randomRecipe))
    return (
        <div className="Practice">
            <h1>Practice</h1>
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