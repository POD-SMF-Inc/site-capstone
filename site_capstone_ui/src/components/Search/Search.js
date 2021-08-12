import SearchRecipeRoute from "../SearchRecipeRoute/SearchRecipeRoute"
import {  useState, useEffect, useContext} from "react"
import APIR from '../../services/apiCalls'
import { Link  } from "react-router-dom"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Search.css"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Search({query,  cuisine, dietS, typeS, intolerances }){
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
    const [isLoading, setIsLoading] = useState(false)
    const [randomRecipe, setRandomRecipe] = useState([])
    const [ totalResults, setTotalResults] = useState(0)
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

    const handleOnSubmit = async () => {
        const { data} = await APIR.getSearchRecipe({ choices })

        if (data)
        {
            const recipesList = data.results
            setTotalResults(data.totalResults)
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
            );
        }
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
    
    
    return (
        <div className="recipPage">
        {renderRecipe()}
        </div>   
    )
}
