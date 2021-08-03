const express = require("express")
const router = express.Router()
const security = require("../middleware/security")
const { requireAuthenicatedUser } = require("../middleware/security")
const ShoppingList = require("../models/shoppingList")

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        console.log("inside get Info route")
        const { user } = res.locals
        const listInfo = await ShoppingList.getInfoList({ user })
        return res.status(200).json({ listInfo })
    }
    catch(err)
    {
        next(err)
    }
})

router.post("/addItem", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.body)
        const items = await ShoppingList.addToList({ listInfo: req.body, user })
        return res.status(201).json({ items })
    }
    catch(err)
    {
        next(err)
    }
})

router.delete("/removeItem", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.body)
        const items = await ShoppingList.removeFromList({ listInfo: req.body, user })
        return res.status(200).json({ items }) 
    }
    catch(err)
    {
        next(err)
    }
})

router.patch("/updateInfo", security.requireAuthenticatedUser, async (req, res, next) => {
    //updates user info
  try {
    const { user } = res.locals
    const items = await ShoppingList.updateInfo({ listInfo: req.body, user })
    return res.status(200).json({ items })
  } catch (err) {
    next(err)
  }
})

module.exports = router