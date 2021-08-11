import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import {  useState, useEffect} from "react"
import APIR from '../../services/apiCalls'
import { Link  } from "react-router-dom"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import NotAuthorized from "../NotAuthorized/NotAuthorized"
import "./Search.css"
//import { ThemeContext } from "../../contexts/ThemeContext";

export default function Search({query,  cuisine, dietS, typeS, intolerances }){
    //const [query, setQuery] = useState("")
    /*
    console.log("diet2: ", dietS)
    console.log("meal type2: ", typeS)
    console.log("cusine2: ", cuisine)
    console.log("query2: ", query)
    */
    //const context = useContext(ThemeContext);
    //const theme = context.isLightTheme ? context.cardLight : context.cardDark;

    const choices = {
        query: query,
        cuisine: cuisine,
        diet: dietS,
        meal_type: typeS,
        intolerances: intolerances
    }
    const [isLoading, setIsLoading] = useState(false)
    console.log("choices: ", choices)
    const [randomRecipe, setRandomRecipe] = useState([])

//HEAD

    const [ totalResults, setTotalResults] = useState(0)

    console.log("randomRandom: ", randomRecipe)
    useEffect(() => {
        const fetchDefaultRecipes = async () =>{
            setIsLoading(true)
            try{
                if (randomRecipe.length === 0)
                {
                    const { data, error } = await APIR.getSearchRecipe({ choices })
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
            }
            catch(error)
            {
                console.log("error")
            }
            setIsLoading(false)
        }
        fetchDefaultRecipes()
    }, [])


//1b32244dbd7a539a5d9743b5e0d1decfed4c00b8

    
    const handleOnSubmit = async () => {
        const { data} = await APIR.getSearchRecipe({ choices })
        
        console.log("data total: " ,data?.totalResults)
        
        if (data)
        {
            const recipesList = data.results
            setTotalResults(data.totalResults)
            //console.log(recipesList)
            console.log("recipeList: ", recipesList)
            if (recipesList)
            {
                setRandomRecipe(recipesList)
            }
        }
    }
    

    const renderRecipe = () => {
        if (isLoading)
        {
            return (
                <div className="Loading">
                <Loader 
                type="Circles" 
                color="#00BFFF" 
                height={80} 
                width={80}
                timeout={3000} //3 secs
                />
                </div>
                // <Loader
                //   type="Puff"
                //   color="#00BFFF"
                //   height={100}
                //   width={100}
                //   timeout={3000} //3 secs
                // />
            );
        }
        return (
            <div className="SearchPage">
            
                
            <div className="buttonS">
                <button type="submit" className="searchbtn"onClick={handleOnSubmit}>Search</button>
                <Link to="/ingredients"><button className="ingred">Find By Ingredients</button></Link>
            </div>
                <SearchRecipeRoute randomRecipe={randomRecipe} totalResults={totalResults}/>
        </div>
        )
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

  //  if (!user?.username) {
  //      return <NotAuthorized user={user} setUser={setUser}/>
  //  }
    
    
    return (
        <div className="recipPage">
        {renderRecipe()}
        </div>
        // <div className="SearchPage">
            
                
        //     <div className="buttonS">
        //         <button type="submit" className="searchbtn"onClick={handleOnSubmit}>Search</button>
        //         <Link to="/ingredients"><button className="ingred">Find By Ingredients</button></Link>
        //     </div>
        //         <SearchRecipeRoute randomRecipe={randomRecipe} totalResults={totalResults}/>
        // </div>
        
    )
}
