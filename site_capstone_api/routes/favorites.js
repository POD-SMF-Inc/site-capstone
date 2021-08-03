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
        return res.status(200).json({ favorites }) 
    }
    catch(err)
    {
        next(err)
    }
})

router.get("/check/:infoId", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
        console.log("req body: ", req.params.infoId)
        const favorites = await Favorites.checkInFavorites({ recipeInfo: req.params.infoId, user })
        return res.status(201).json({ favorites }) 
    }
    catch(err)
    {
        next(err)
    }
})

module.exports = router
  
// var express = require('express');
// var router = express.Router();
// var unirest = require('unirest');

// /* GET home page. */
// router.get('/favorites', function(req, res, next) {
//   //request information for fav recipes and return list of recipes marked as favourites
//   if (req.session.favourites != undefined){ //only call if favourites have been added.
//     var recipesCSV = req.session.favorites.join(",");

//     unirest
//         .get("https://api.spoonacular.com/recipes/informationBulk")
//         .query({"apiKey": "20faf6bbe4074762be9f0c0db3fe9709","ids": recipesCSV })
//         .headers({"useQueryString": true})
//         .end(function (response) {
//           if (response.error) throw new Error(response.error);
//           console.log(response.body);
//           req.favRecipes = response.body;
//           res.render('favorites', { favRecipes: req.favRecipes, username: req.session.user });

//         });
//   }
//   else { res.render('favorites', {username: req.session.user});}
// });


// //Handler for recipes added to favourites via ajax call.
// router.post('/favorites', function(req, res, next) {
//   req.session.favorites =  req.session.favorites || []; //itself if it exists else empty list
//   req.session.favorites.push( req.body.recID); //push to list of fav recipe objects for session
//   res.send("Your recipe has been added to the Favourites Tab");
//   console.log(req.session.favorites);
// });

// module.exports = router;
