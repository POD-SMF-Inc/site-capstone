import APIR from "../../services/apiCalls";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { useEffect, useState, useContext } from "react";
import apiClient from "../../services/apiClient"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function EquipmentC({ recipe })
{
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

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
        <div className={`EquipmentC ${theme}`}>
            <RecipeDetails recipe={recipe} equipment={equipment} visible={visible} setVisible={setVisible}/>
        </div>
    )
}