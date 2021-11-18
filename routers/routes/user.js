const express = require("express");
const { createUser, showuser, showusers,updateone,DelOne } = require("./../controller/user");
const userRouter = express.Router();

userRouter.get("/user", showuser);
userRouter.get("/users", showusers);
userRouter.post("/add", createUser);
userRouter.put('/update/', updateone)
userRouter.delete('/update/:id', DelOne)
module.exports = userRouter;
