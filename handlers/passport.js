const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models').User;


passport.use(new LocalStrategy( {usernameField: 'username', passwordField: 'password'},
  (username, password, done) => {
    // User.find({where: { username: username }}, function(err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'The username is not registered' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password. Please Try Again' });
    //   }
    //   return done(null, user);
    // });

    User
      .findAll({where:{username: username, password: password}})
      .then(function(user){
        console.log(user);
      // if(!user) {
      //     return done(null, false, {message: 'The username that you entered is not registered' });
      // }
      // if (!user.validPassword(password)) {
      //     return done(null, false, { message: 'Incorrect password. Please Try Again' });
      // }
      // return done(null, user);
      });
  }
));