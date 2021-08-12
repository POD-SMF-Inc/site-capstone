import "./AddToFav.css"
import apiClient from "../../services/apiClient"
import RemoveFav from "../RemoveFav/RemoveFav"
export default function AddToFav({ recipeInfo })
{
    const handleOnSubmit = async () => {
        const { data, error } = await apiClient.addToFav({ recipeInfo})
    }
    return (
        <div className="AddToFav">
            <button onClick={handleOnSubmit} className="favbtn">Add To Favorites ❤️</button>
        </div>
    )
}