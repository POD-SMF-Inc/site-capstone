import { useState } from "react"
import "./FavoritesInfo.css"
import FavorRoute from "../FavorRoute/FavorRoute"
export default function FavoritesInfo(favorites) {
    return (
        <div className="FavoritesInfo">
            {
                favorites?.favorites?.map(element => (
                    <>
                        <FavorRoute element={element} />
                    </>
                ))
            }
        </div>
    )
}