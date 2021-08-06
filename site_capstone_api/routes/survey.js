const express = require("express")
const Survey = require("../models/survey")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async(req,res,next) => {
    try {
        //  survey log
      const { user } = res.locals
      const survey = await Survey.fetchSurvey({ user })
      return res.status(200).json({ survey })
    } catch (err) {
      next (err)
    }
  })
  
  
  router.post("/survey", security.requireAuthenticatedUser, async (req, res, next) => {
      //inserts info into log
    try {
      const { user } = res.locals
      const survey = await Survey.insertInfo({ profile: req.body, user })
      return res.status(201).json({ survey })
    } catch (err) {
      next(err)
    }
  })

  router.patch("/", security.requireAuthenticatedUser, async (req, res, next) => {
    //updates user info
  try {
    const { user } = res.locals
    const info = await Survey.updateInfo({ infoUpdate: req.body, user })
    return res.status(200).json({ info })
  } catch (err) {
    next(err)
  }
})




  module.exports = router