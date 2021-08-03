import "./Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import APIR from '../../services/apiCalls'
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import EquipmentC from "../EquipmentCalls/EquipmentC";
export default function Details()
{
    const { idNum } = useParams()
    const [error, setError] = useState(null)
    const [ recipe, setRecipe ] = useState({})
    console.log("id: ", idNum)
   
    
    useEffect(() => {
        // console.log("in here")
        const fetchRecipe = async () => {
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
        
        }
        fetchRecipe()
        console.log("recipe sec: ", recipe)
    }, [idNum])

    console.log("recipe: ", recipe)
        return (
            <div className="detail">
                <EquipmentC recipe={recipe} />
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