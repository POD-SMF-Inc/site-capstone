import "./Ingredients.css"
import { useState } from "react"
import APIR from '../../services/apiCalls'
import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import IngredientRR from "../IngredientRecipeRoute/IngredientRR"
export default function Ingredients()
{
    const [ingredSent, setingredSent] = useState("")
    const [randomRecipe, setRandomRecipe] = useState([])
    

    function trimmed(element, arrayL)
    {
        const newElement = element.trim()
        arrayL.push(newElement)
    }

    function changeIngredient(inList)
    {
        let inArr = []
        const sep = inList.split(",")
        sep.forEach(element => trimmed(element, inArr))
        //console.log("inArr: ", inArr)
        return inArr
    }

    const handleOnSubmit = async () => {
        const ingredList = changeIngredient(ingredSent)
        //console.log("ingredients: ", ingredList)
        const { data, error } = await APIR.getIngredientRecipe(ingredList)
        setRandomRecipe(data)
        //console.log(data)
    }


    return (
        <div className="Ingredients">
            <div className="ingTitle">
                <h1>Search By Ingredients</h1>
            </div>
            <div className="listIngred">
                <input type="text" name="ingredients" 
                placeholder="Seperate Each Ingredient With Commas" 
                onChange={(e) => setingredSent(e.target.value)} />
            </div>
            <button type="submit" onClick={handleOnSubmit}>Search</button>
            <div className="contentIngred">
            <IngredientRR randomRecipe={randomRecipe} />
            </div>
        </div>
    )
}