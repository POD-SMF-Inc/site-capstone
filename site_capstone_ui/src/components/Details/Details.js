import "./Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import APIR from '../../services/apiCalls'
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import EquipmentC from "../EquipmentCalls/EquipmentC";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Details({ user, setAppState })
{
    const { idNum } = useParams()
    const [error, setError] = useState(null)
    const [ recipe, setRecipe ] = useState({})
    const [isLoading, setIsLoading] = useState(false)
   
    
    useEffect(() => {
        const fetchRecipe = async () => {
            setIsLoading(true)
            try {
                const { data, error } = await APIR.getRecipeInfo(idNum)
                
                if (data)
                {
                    setRecipe(data)
                }
                else {
                    setError("Recipe Not Found")
                }
            }
            catch (err)
            {
                console.log(err)
                setError("Recipe Not Found")
    
            }
            setIsLoading(false)
        }

        if (user?.username) {
            fetchRecipe()
        }
    }, [idNum])

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
          );
    }
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
    
}