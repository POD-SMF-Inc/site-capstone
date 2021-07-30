import APIR from "../../services/apiCalls";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { useEffect, useState } from "react";
export default function EquipmentC({ recipe })
{
    const [equipment, setEquiment] = useState({})

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
        fetchEquipment()
    }, [recipe?.id])
    return (
        <div className="EquipmentC">
            <RecipeDetails recipe={recipe} equipment={equipment}/>
        </div>
    )
}