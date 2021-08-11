import "./Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import APIR from '../../services/apiCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import EquipmentC from "../EquipmentCalls/EquipmentC";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Details({ user, setAppState })
{
    const { idNum } = useParams()
    const [error, setError] = useState(null)
    const [ recipe, setRecipe ] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    console.log("id: ", idNum)
   
    
    useEffect(() => {
        // console.log("in here")
        const fetchRecipe = async () => {
            setIsLoading(true)
                console.log("in here")
            try {
                const { data, error } = await APIR.getRecipeInfo(idNum)
                
                if (data)
                {
                    setRecipe(data)
                }
                else {
                    setError("Recipe Not Found")
                }
                // console.log("data: ", data)
            }
            catch (err)
            {
                console.log(err)
                setError("Recipe Not Found")
    
            }
            setIsLoading(false)
        }

        if (user?.username) {
            //return <NotAuthorized user={user} setAppState={setAppState}/>
            fetchRecipe()
        }
        console.log("recipe sec: ", recipe)
    }, [idNum])

     console.log("right now")

const renderRecipeInfo = () => {
    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    }
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
    console.log("recipe: ", recipe)
    return (
        <>
        <div className="detail">
            <EquipmentC recipe={recipe} />
        </div>
        </>
    )
}

return (
    <div className="detPage">
        {renderRecipeInfo()}
    </div>
)
    

    // console.log("right here")
    /*
    console.log("recipe: ", recipe.analyzedInstructions[0].steps[0].ingredients[0].name)
    recipe?.analyzedInstructions[0]?.steps?.map(element => (
                //console.log("step", element.number ,": " ,element.step)
                    element.ingredients.map((item) => (
                        console.log("item: ", item.name)
                ))
                
    ))
    */
    // console.log("recipe in details: ", recipe)
    
}