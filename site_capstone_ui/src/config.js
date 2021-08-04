require('dotenv').config()

const API_KEY_RECIPE = process.env.REACT_APP_RECIPE_API_KEY || "secret_recipe_key"
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || "secret_youtube_key"
console.log(process.env)
console.log(API_KEY_RECIPE)
module.exports = {
    API_KEY_RECIPE,
    YOUTUBE_API_KEY
  }