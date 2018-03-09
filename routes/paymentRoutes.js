const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecret);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false});

module.exports = app => {
  app.post("/api/stripe", requireAuth, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5 credits for 5 dollars",
      source: req.body.id
    });
    req.user.credits += 5;

    const updatedUser = await req.user.save();

    res.send(JSON.stringify(updatedUser.credits));
  });
};