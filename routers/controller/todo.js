const todoModel = require("./../../db/models/todoSchema");

const createTodos = (req, res) => {
  const { Task } = req.body;

  const newTask = new todoModel({
    Task,
  });

  newTask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllTask = (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getTaskByName = (req, res) => {
  const { Task } = req.body;
  todoModel
    .findOne({ Task })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createTodos, getAllTask, getTaskByName };
