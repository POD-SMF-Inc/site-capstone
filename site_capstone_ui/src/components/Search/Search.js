import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import { useEffect, useState} from "react"
import APIR from '../../services/apiCalls'
import { Link, useNavigate } from "react-router-dom"
import "./Search.css"

export default function Search({ query, cuisine, dietS, typeS}){
    
    /*
    console.log("diet2: ", dietS)
    console.log("meal type2: ", typeS)
    console.log("cusine2: ", cuisine)
    console.log("query2: ", query)
    */
    const choices = {
        query: query,
        cuisine: cuisine,
        diet: dietS,
        meal_type: typeS
    }

    //console.log("choices: ", choices)
    const [randomRecipe, setRandomRecipe] = useState([])


    
    const handleOnSubmit = async () => {
        const { data, error } = await APIR.getSearchRecipe({ choices })
        
        //console.log(data)
        
        if (data)
        {
            const recipesList = data.results
            //console.log(recipesList)
            //console.log("recipeList: ", recipesList)
            if (recipesList)
            {
                setRandomRecipe(recipesList)
            }
        }
        

    }
    
    //getIngredientRecipe
    /*
    useEffect(() => {
        const fetchRandom = async () => {
            try {
                const data = await APIR.getSearchRecipe("")
                console.log("data2: ", data)
                const recipesList = data.data.results
                console.log("recipeList: ", recipesList)
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
    */
    return (
        <div className="Search">
            <h1>Search Page</h1>
            <button type="submit" onClick={handleOnSubmit}>Search</button>
            <Link to="/ingredients"><button className="ingred">Find By Ingredients</button></Link>
            <SearchRecipeRoute randomRecipe={randomRecipe}/>
        </div>
    )
}