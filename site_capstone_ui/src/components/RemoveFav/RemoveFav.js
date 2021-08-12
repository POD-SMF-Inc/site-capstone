import "./RemoveFav.css"
import apiClient from "../../services/apiClient"
import AddToFav from "../AddToFav/AddToFav"
export default function RemoveFav({ recipeInfo })
{
    const handleOnSubmit = async () => {
        const { data, error } = await apiClient.removeFromFav({ recipeInfo})
    }
    return (
        <div className="RemoveFav">
            <button onClick={handleOnSubmit}>Remove From Favorites</button>
        </div>
    )
}