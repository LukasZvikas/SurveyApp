const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  credits: { type: Number, default: 0 }
});


const User = mongoose.model("users", UserSchema);

module.exports = User;