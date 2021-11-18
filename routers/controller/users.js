const usersModel = require("./../../db/models/usersSchema");

const createUser = (req, res) => {
  const { UserName, Email, age,role } = req.body;

  const newUser = new usersModel({
    UserName,
    Email,
    age,
    role
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllUsers = (req, res) => {
  usersModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserkByName = (req, res) => {
  const { UserName } = req.body;
  usersModel
    .findOne({ UserName })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createUser, getAllUsers, getUserkByName };
