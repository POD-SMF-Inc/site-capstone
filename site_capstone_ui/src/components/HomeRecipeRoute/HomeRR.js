import React from "react"
import HomeRL from "../HomeRecipeLayout/HomeRL"

export default function HomeRR({ homeRecipe }) {
    return (
        <div className="HomeRecipe">
            <h1>HomeRecipe</h1>
            {
                homeRecipe.map(element => (
                    <>
                        <div className="Sep">
                            <HomeRL element={element} />
                        </div>
                    </>
                ))
            }
            
        </div>
    )
}