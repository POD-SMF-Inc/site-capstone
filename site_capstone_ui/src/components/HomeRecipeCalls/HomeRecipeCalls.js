import { useEffect, useState } from "react"
import APIR from '../../services/apiCalls'
import HomeRR from "../HomeRecipeRoute/HomeRR"
import "./HomeRecipeCalls.css"
export default function HomeRecipeCalls(){

    const [homeRecipe, setHomeRecipe] = useState([])
    useEffect(() => {
        const fetchHomeRecipe = async () => {
            try {
                const dataH = await APIR.getHomeRandomRecipe()
                const recipesListH = dataH.data.recipes
                if (recipesListH)
                {
                    setHomeRecipe(recipesListH)
                    
                }
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchHomeRecipe()
    }, [])

    
    return (
        <div className="RecipeCalls">
            <HomeRR homeRecipe={homeRecipe} />
        </div>
    )
}