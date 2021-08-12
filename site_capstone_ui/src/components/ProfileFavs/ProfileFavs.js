import "./ProfileFavs.css"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import FavoritesInfo from "../FavoritesInfo/FavoritesInfo"
export default function ProfileFavs() {
    const [ favorites, setFavorites ] = useState([])
    useEffect(() => {
        const fetchFavorites = async () => {
        try {
            const { data, error } = await apiClient.getFavs()
            if (data)
            {
            setFavorites(data.favorites)
            }
        }
        catch(error)
        {
            console.log(error)
        }
        }
        fetchFavorites()
    }, [])

    return (
        <div className="ProfileFavs">
            {favorites.length ? (
                <div className="favoritesList">
                    <FavoritesInfo favorites={favorites.slice(0, 3)} />
                </div>
            ) : (
                <div className="emptyFav">
                    <h1>You don't have any favorite recipes yet!</h1>
                </div>
        
        )}
        </div>
    )
}