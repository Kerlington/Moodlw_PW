const express = require('express')
const router  = express.Router()
const userModel = require('../models/userModel')

router.get("/", async (req, res)=>{
    let result = await userModel.getUsers()
    res.status(200).json(result)
})

router.get("/:id", async (req, res) => {
    let id= req.params.id
    let result = await userModel.getUser(id)
    res.status(200).json(result)
})

module.exports = router 



