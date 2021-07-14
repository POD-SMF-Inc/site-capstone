import { useEffect, useState} from "react"
import APIR from '../../services/apiCalls'
import Practice from "../Practice/Practice"

export default function RecipeCalls() {
    const [randomRecipe, setRandomRecipe] = useState([])
    

    useEffect(() => {
        const fetchRandom = async () => {
            try {
                const data = await APIR.getRandomRecipe()
                const recipesList = data.data.recipes
                if (recipesList)
                {
                    setRandomRecipe(recipesList)
                }
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchRandom()   
    }, [])

    

    return (
        <div className="RecipeCalls">
            <h1>Recipe</h1>
            <Practice randomRecipe={randomRecipe}/>
        </div>
    )
}
