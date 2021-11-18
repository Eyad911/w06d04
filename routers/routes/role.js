const express = require("express");

const { createUser, getAllRoles } = require("./../controller/role");

const roleRouter = express.Router();

roleRouter.post("/create", createUser);
roleRouter.get("/", getAllRoles);

module.exports = roleRouter;
