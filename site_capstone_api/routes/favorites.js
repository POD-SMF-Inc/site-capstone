const express = require("express")
const router = express.Router()
const security = require("../middleware/security")
const { requireAuthenicatedUser } = require("../middleware/security")
const Favorites = require("../models/favorites")
const { route } = require("./auth")


router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        const favorites = await Favorites.getFavorites({ user })
        return res.status(200).json({ favorites })
    }
    catch(err)
    {
        next(err)
    }
})

router.post("/add", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.body)
        const favorites = await Favorites.addToFavorites({ recipeInfo: req.body, user })
        return res.status(201).json({ favorites })
    }
    catch(err)
    {
        next(err)
    }
})

router.delete("/remove", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.body)
        const favorites = await Favorites.removeFromFavorites({ recipeInfo: req.body, user })
        return res.status(201).json({ favorites }) 
    }
    catch(err)
    {
        next(err)
    }
})

router.get("/check", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.body)
        const favorites = await Favorites.checkInFavorites({ recipeInfo: req.body, user })
        return res.status(201).json({ favorites }) 
    }
    catch(err)
    {
        next(err)
    }
})

module.exports = router