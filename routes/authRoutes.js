const authentication = require('../controllers/authentication');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = app => {
  app.get('/user', requireAuth, (req, res) => {
    res.send(JSON.stringify(req.user.credits))
  });
  app.post('/user/signin', requireSignin, authentication.signin);
  
  app.post('/user/signup', authentication.signup);
};
