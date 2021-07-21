import "./Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import APIR from '../../services/apiCalls'

export default function Details()
{
    const { idNum } = useParams()
    const [ recipe, setRecipe ] = useState({})
    console.log("id: ", idNum)
    
    
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const { data, error } = await APIR.getRecipeInfo(idNum)
                if (data)
                {
                    setRecipe(data)
                }
                console.log("data: ", data)
            }
            catch (err)
            {
                console.log(err)
                //setError("Product Not Found")
            }
        }
        fetchRecipe()
    }, [idNum])

    window.onload = function (){
        console.log("in here window")
    }

    window.addEventListener('load', (event) => {
        
        console.log("loaded")
    })

    const infoSec = document.querySelector("#info")
    const summaryInfo = recipe.summary
    console.log("summary info: ", summaryInfo)
    
    try{ 
        infoSec.innerHTML = summaryInfo
    }
    catch(error)
    {
        console.log(error)
    }
    
    //console.log("steps: ", recipe.analyzedInstructions[0].steps)
    return (
        <div className="detail">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="Meal"></img>
            <h1>Summary</h1>

            <div id="info"></div>
            <p>{summaryInfo}</p>
            <div className="steps">
                <h1>Recipe Steps</h1>
                


            </div>
        </div>
    )
}