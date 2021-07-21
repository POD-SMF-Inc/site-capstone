import "./Ingredients.css"
import { useState } from "react"
import APIR from '../../services/apiCalls'
import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
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
            <h1>In ingredients</h1>
            <div className="ingredients">
                <label htmlFor="ingredients">Ingredients</label>
                <input type="text" name="ingredients" 
                placeholder="Search Ingredients" 
                onChange={(e) => setingredSent(e.target.value)} />
            </div>
            <button type="submit" onClick={handleOnSubmit}>Search</button>
            <SearchRecipeRoute randomRecipe={randomRecipe} />
        </div>
    )
}