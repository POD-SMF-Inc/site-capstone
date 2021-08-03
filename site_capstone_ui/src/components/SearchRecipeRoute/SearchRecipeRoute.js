import React, {  useState } from "react"
import "./SearchRecipeRoute.css"

import SeperateRecipe from "../SeperateRecipe/SeperateRecipe"

export default function SearchRecipeRoute({ randomRecipe }) {
    //const [ items, setItems ] = useState([])
    const [ visible, setVisible ] = useState(1)
    //setItems(randomRecipe)
    console.log("rand: ", randomRecipe)
    console.log("type: ", typeof(randomRecipe))

    const loadMore = () => {
         setVisible((prevValue) => prevValue + 1)
     }
    return (
        <div className="SearchRR">
            {randomRecipe?.length === 0 ? null : <button onClick={loadMore}>Load More</button>}
            {
                randomRecipe?.slice(0, visible).map(element => (
                    <>
                            <SeperateRecipe element={element} />
                    </>
                ))
            }
            
        </div>
    )
}