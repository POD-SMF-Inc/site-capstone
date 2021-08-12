import "./Ingredients.css"
import { useState } from "react"
import APIR from '../../services/apiCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import IngredientRR from "../IngredientRecipeRoute/IngredientRR"
export default function Ingredients( { user, setAppState } )
{
    const [ingredSent, setingredSent] = useState("")
    const [randomRecipe, setRandomRecipe] = useState([])
    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    } 

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
        return inArr
    }

    const handleOnSubmit = async () => {
        const ingredList = changeIngredient(ingredSent)
        const { data, error } = await APIR.getIngredientRecipe(ingredList)
        setRandomRecipe(data)
    }


    return (
        <div className="Ingredients">
            <div className="headerIng">
                <div className="ingTitle">
                    <h1 id= "searchby">Search By Ingredients</h1>
                    <h2 id="filter">Filter Your Search By Ingredients Your Recipe Must Have!</h2>
                </div>
                <div className="listIngred">
                    <input type="text" name="ingredients" 
                    placeholder="Seperate Each Ingredient With Commas Ex: flour, sugar" 
                    onChange={(e) => setingredSent(e.target.value)} />
                </div>
                <button id="searchbtn" type="submit" onClick={handleOnSubmit}>Search</button>
            </div>
            <div className="contentIngred">
            <IngredientRR randomRecipe={randomRecipe} />
            </div>
        </div>
    )
}