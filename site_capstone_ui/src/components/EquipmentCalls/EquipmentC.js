import APIR from "../../services/apiCalls";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient"
export default function EquipmentC({ recipe })
{
    const [equipment, setEquiment] = useState({})
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const fetchEquipment = async () => {
            try
            {
                const { data, error } = await APIR.getEquipment(recipe?.id)
                
                if (data)
                {
                    setEquiment(data)
                }
            }
            catch(error)
            {
                console.log(error)
            }
        
        }

        const fetchCheckRecipe = async () => {
            try {
                const { data, error } = await apiClient.checkFav(recipe?.id)
                if (data)
                {
                    //If false then its not in favorites
                    console.log("dataCheckReci: ", data)
                    if (data.favorites)
                    {
                        //Choosing to see Favorites Button
                        setVisible(false)            
                    }
                    else
                    {
                        setVisible(true)
                    }
                    
                }
            }
            catch (err){
                console.log(err)
            }
        }
        fetchEquipment()
        fetchCheckRecipe()
    }, [recipe?.id])
    return (
        <div className="EquipmentC">
            <RecipeDetails recipe={recipe} equipment={equipment} visible={visible} setVisible={setVisible}/>
        </div>
    )
}