const express = require("express")
const Survey = require("../models/survey")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async(req,res,next) => {
    try {
        // create new exercise log
      const { user } = res.locals
      const survey = await Survey.surveyForm({ survey:req.body, user })
      return res.status(201).json({ survey })
    } catch (err) {
      next (err)
    }
  })
  
  
  router.get("/survey", security.requireAuthenticatedUser, async (req, res, next) => {
      //lists all Exercises 
    try {
      const { user } = res.locals
      const survey = await Survey.inserInfo({ user })
      return res.status(200).json({ survey })
    } catch (err) {
      next(err)
    }
  })

  module.exports = router