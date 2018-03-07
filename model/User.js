const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const saltRounds = 10;

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  credits: { type: Number, default: 0 }
});

UserSchema.pre("save", function(next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.verifyPassword = function(candPassword, callback) {
  bcrypt.compare(candPassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const User = mongoose.model("users", UserSchema);

module.exports = User;
