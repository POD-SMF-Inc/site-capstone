const db = require("../db")

class Favorites{
    static favoritesInfo(favorites)
    {
        return {
            id: favorites.id,
            user_id: favorites.user_id,
            title: favorites.title,
            picture: favorites.picture,
            food_id: favorites.food_id
        }
    }

    //Create function to add to favorites
    static async addToFavorites({ recipeInfo, user })
    {
        console.log("recIn: ", recipeInfo.recipeInfo.food_id)
        const query = `INSERT INTO favorites (title, food_id, picture, user_id)
        VALUES ($1, $2, $3, (SELECT id FROM users WHERE username = $4))
        RETURNING id, user_id, title, food_id, picture`

        const result = await db.query(query, [recipeInfo.recipeInfo.title, recipeInfo.recipeInfo.food_id, recipeInfo.recipeInfo.picture, user.username])

        const infoResult = result.rows[0]
        console.log("addFav: ", infoResult)
        return this.favoritesInfo(infoResult)
    }
    //Create function to remove from favories
    static async removeFromFavorites({ recipeInfo, user })
    {
        console.log("here")
        console.log("Reci rem: ", recipeInfo.recipeInfo.food_id)
        console.log("user: ", user)
        const query = `DELETE FROM favorites
            WHERE food_id = $1 AND user_id = (SELECT id FROM users WHERE username = $2)
            RETURNING *`

        const result = await db.query(query, [recipeInfo.recipeInfo.food_id, user.username])

        const infoResult = result.rows
        console.log("removeFav: ", infoResult)
        return infoResult
    }

    //Create function to check if recipe is in favorites
    static async checkInFavorites({ recipeInfo, user })
    {
        console.log("checkFavorites: ", recipeInfo)
        const query = `SELECT *
        FROM favorites
        WHERE food_id = $1 AND user_id = (SELECT id FROM users WHERE username = $2)`

        const result = await db.query(query, [recipeInfo, user.username])

        const infoResult = result.rows[0]
        
        console.log("userL : ", user)
        if (infoResult === undefined)
        {
            console.log("yes its undefined")
            console.log("checkFav no: ", infoResult)
            return false
        }

        console.log("checkFav yes: ", infoResult)
        return true
    }
    //Create function to get favorite recipes info or id
    static async getFavorites({ user })
    {
        console.log("here")
        console.log("user: ", user)
        const query = `SELECT *
        FROM favorites
        WHERE user_id = (SELECT id FROM users WHERE username = $1)`

        const result = await db.query(query, [user.username])

        const infoResult = result.rows
        console.log("getFav: ", infoResult)
        return infoResult
    }

}

module.exports = Favorites