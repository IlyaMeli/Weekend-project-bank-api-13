const express = require("express");
const { getAllUsers, addUser ,depositToUser} = require("../controllers/user");
const userRouter = express.Router();

userRouter.get("/api/users", getAllUsers);
userRouter.post("/api/users", addUser);
userRouter.put("/api/users/deposit", depositToUser);

module.exports = userRouter;
