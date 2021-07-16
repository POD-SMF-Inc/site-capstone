import React from "react"
import HomeRL from "../HomeRecipeLayout/HomeRL"

export default function HomeRR({ homeRecipe }) {
    return (
        <div className="HomeRecipe">
            <h1>Recipes</h1>
            {
                homeRecipe.map(element => (
                    <>
                            <HomeRL element={element} />
                    </>
                ))
            }
            
        </div>
    )
}

/*<div className="Sep">
                            <HomeRL element={element} />
                        </div>*/