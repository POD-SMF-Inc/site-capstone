const db = require("../db")

class ShoppingList{
    static shoppingInfo(info)
    {
        return {
            id: info.id,
            title: info.title,
            quantity: info.quantity,
            user_id: info.user_id,
            unique_id: info.unique_id
        }
    }

    //add info to shopping list
    static async addToList({ listInfo, user })
    {
        const query = `INSERT INTO shopping (title, unique_id, user_id)
        VALUES ($1, $2, (SELECT id FROM users WHERE username = $3))
        RETURNING id, user_id, title, quantity, is_selected, unique_id
        `
        const result = await db.query(query, [listInfo.title, listInfo.unique_id, user.username])
        const infoResult = result.rows[0]
        console.log("addToList: ", infoResult)
        return this.shoppingInfo(infoResult)
    }
    //Remove information from shopping list
    static async removeFromList({ listInfo, user })
    {
        console.log("listInfo: ", listInfo)
        console.log("user: ", user)
        console.log("in get remove info sec")
        const query = `DELETE FROM shopping
            WHERE unique_id = $1 AND user_id = (SELECT id FROM users WHERE username = $2)
            RETURNING *`
        const result = await db.query(query, [listInfo.unique_id, user.username])
        const infoResult = result.rows
        console.log("remove List: ", infoResult)
        return infoResult
    }
    //get all information from shopping list
    static async getInfoList({ user })
    {
        console.log("user: ", user)
        console.log("in get info sec")
        const query = `SELECT *
        FROM shopping
        WHERE user_id = (SELECT id FROM users WHERE username = $1)`

        const result = await db.query(query, [user.username])

        const infoResult = result.rows
        return infoResult
    }

    //Update shopping list infomation
    static async updateInfo({ listInfo, user })
    {
        console.log("listInfo up: ", listInfo.title)
        console.log("users in up: ", user)
        
        const query = `UPDATE shopping
        SET title = $1, quantity = $2, is_selected = $3
        WHERE unique_id = $4 AND user_id = (SELECT id FROM users WHERE username = $5)
        RETURNING id, user_id, title, quantity, is_selected, unique_id`
        const result = await db.query(query, [listInfo.title, listInfo.quantity, listInfo.is_selected, listInfo.unique_id, user.username])
        
        console.log("Result up: ", result)
        const infoResult = result.rows[0]
        return infoResult
    }
}

module.exports = ShoppingList