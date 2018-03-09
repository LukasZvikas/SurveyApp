const passport = require("passport");
const jwtPassport = require("passport-jwt").Strategy;
const jwtExtract = require("passport-jwt").ExtractJwt;
const localPassport = require("passport-local");
const User = require("../model/User");
const keys = require("../config/keys");

const jwtOptions = {
  jwtFromRequest: jwtExtract.fromHeader("authorization"),
  secretOrKey: keys.jwtSecret
};

passport.use(
  new jwtPassport(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    });
  })
);

const localOptions = { usernameField: "email" };

passport.use(
  new localPassport(localOptions, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      user.verifyPassword(password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  })
);