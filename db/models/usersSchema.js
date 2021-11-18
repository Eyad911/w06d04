const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: { type: String, required: true },
  Email: { type: String, required: true },
  age: { type: Number },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "6196421412542e596f64aba0",
  },

});

module.exports = mongoose.model("Users", userSchema);
