const express = require("express")
const { createUser , showuser,showusers} = require("./../controller/user")
const userRouter = express.Router()

userRouter.get("/user" , showuser)
userRouter.get("/users" , showusers)
userRouter.post("/add",createUser)
// userRouter.put('/update', updateUsers)
module.exports = userRouter
