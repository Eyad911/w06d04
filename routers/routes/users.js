const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserkByName,
} = require("./../controller/users");

const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/User", getUserkByName);

module.exports = userRouter;
