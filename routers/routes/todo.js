const express = require("express");
const {
  createTodos,
  getAllTask,
  getTaskByName,
} = require("./../controller/todo");

const todoRouter = express.Router();

todoRouter.post("/create", createTodos);
todoRouter.get("/", getAllTask);
todoRouter.get("/todo", getTaskByName);

module.exports = todoRouter;
