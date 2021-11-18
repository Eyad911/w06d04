const mongoose = require("mongoose");


const roleSchema = new mongoose.Schema({
    typeOfUser: { type: String, required: true, unique: true },
    Permission: [{type: String}]
  })


  module.exports = mongoose.model("Role", roleSchema);