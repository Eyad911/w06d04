const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    Task: { type: String, required: true },
    isDeleted: { type: String, default: false },
    isComp: { type: String, default: false},
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        default: "we copy the id from the role we created in the role schema",
      },
  });





  module.exports = mongoose.model("Todo", todoSchema);