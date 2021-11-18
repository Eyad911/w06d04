const roleModel = require("./../../db/models/roleSchema");

const createUser = (req, res) => {
  const { typeOfUser, Permission } = req.body;

  const newRole = new roleModel({
    typeOfUser,
    Permission,
  });

  newRole
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllRoles = (req, res) => {
    roleModel.find({}).then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };



module.exports = {createUser,getAllRoles}