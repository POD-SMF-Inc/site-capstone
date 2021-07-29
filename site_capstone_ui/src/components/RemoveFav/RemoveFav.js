import "./RemoveFav.css"
import apiClient from "../../services/apiClient"
import AddToFav from "../AddToFav/AddToFav"
export default function RemoveFav({ recipeInfo })
{
    console.log("recipe in deleteFav: ", recipeInfo )
    const handleOnSubmit = async () => {
        const { data, error } = await apiClient.removeFromFav({ recipeInfo})

        console.log("data in delete Fav: ", data)
    }
    return (
        <div className="RemoveFav">
            <button onClick={handleOnSubmit}>Remove From Favorites</button>
        </div>
    )
}