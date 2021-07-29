import React from "react"
import "./IngredientRR.css"
import { useEffect, useState} from "react"
import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function IngredientRR({ randomRecipe }) {
    //console.log("rand: ", randomRecipe)
    //console.log("type: ", typeof(randomRecipe))
    const [ visible, setVisible ] = useState(1)
    //const [ isShown, setIsShown ] = useState(value)
    const loadMore = () => {
        setVisible((prevValue) => prevValue + 1)
    }

    
    return (
        <div className="IngredientRR">
            {
                randomRecipe?.slice(0, visible).map(element => (
                    <>

                            <SeperateRecipe element={element} />
        
                    </>
                ))
            }
            {randomRecipe?.length === 0 ? null : <button onClick={loadMore}>Load More</button>}
            
        </div>
    )
}