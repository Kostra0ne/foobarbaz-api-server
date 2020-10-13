const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/svg/img_258083.png",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
