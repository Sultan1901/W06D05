const express = require("express")
const { createUser } = require("./../controller/user")
const userRouter = express.Router()

userRouter.get("/user" , (req,res) => {
    res.json("asdasdasd")
})

userRouter.post("/add",createUser)
module.exports = userRouter