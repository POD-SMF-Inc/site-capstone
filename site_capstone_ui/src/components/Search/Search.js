import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import {  useState, useEffect, useContext} from "react"
import APIR from '../../services/apiCalls'
import { Link  } from "react-router-dom"
//import NotAuthorized from "../NotAuthorized/NotAuthorized"
import "./Search.css"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Search({query,  cuisine, dietS, typeS, intolerances }){
    //const [query, setQuery] = useState("")
    /*
    console.log("diet2: ", dietS)
    console.log("meal type2: ", typeS)
    console.log("cusine2: ", cuisine)
    console.log("query2: ", query)
    */
   
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
    const ThemeToggler = (props) => {
        const context = useContext(ThemeContext);
        const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
        const toggleTheme = context.toggleTheme;
      
        return (
          <button className={`button is-light rounded`} onClick={toggleTheme}>
            {btnText}
          </button>
        );
      };


    const choices = {
        query: query,
        cuisine: cuisine,
        diet: dietS,
        meal_type: typeS,
        intolerances: intolerances
    }

    console.log("choices: ", choices)
    const [randomRecipe, setRandomRecipe] = useState([])

//HEAD

    const [ totalResults, setTotalResults] = useState(0)

    console.log("randomRandom: ", randomRecipe)
    useEffect(() => {
        const fetchDefaultRecipes = async () =>{
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
        <div className={`searchp ${theme} `}>
      <div className={theme}>
      
        <div className='SearchPage'>
            
            <div className='buttonS'>
                <button type="submit" className={`searchbtn ${theme2}`}onClick={handleOnSubmit}>Search</button>
                <Link to="/ingredients"><button className={`ingred ${theme2}`}>Find By Ingredients</button></Link>
            </div>
                <SearchRecipeRoute randomRecipe={randomRecipe} totalResults={totalResults} />
        </div>
        </div>
      </div>
        
    )
}
