import "./AddToFav.css"
import apiClient from "../../services/apiClient"
import RemoveFav from "../RemoveFav/RemoveFav"
export default function AddToFav({ recipeInfo })
{
    console.log("recipe in addFav: ", recipeInfo )
    const handleOnSubmit = async () => {
        const { data, error } = await apiClient.addToFav({ recipeInfo})
        console.log("data in add Fav: ", data)
    }
    return (
        <div className="AddToFav">
            <button onClick={handleOnSubmit} className="favbtn">Add To Favorites ❤️</button>
        </div>
    )
}