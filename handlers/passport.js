const passport = require('passport');
const LocalStrategy = require('passport-local');

// Don't forget to include models here.
const models = require('../models/index');
const User = models.User;
const Role = models.Role;

// usernameField and passwordField must be defined in your models/users
passport.use(new LocalStrategy( {usernameField: 'username', passwordField: 'password'},
  (username, password, done) => {
    // Using sequelize, select user from database
    User.findOne({
      where:{username: username, password: password},
      include:[
        {model: Role}
      ]
    })
    .then( function(user){
      // see models/users.js for validPassword InstanceMethod
      if (!user) {
          return done(null, false, { message: 'Incorrect username and password. Please try again.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect username and password. Please try again.' });
      }
      return done(null, user, { message: 'You have sucessfully logged in!' });
    });
  }
));

// In supporting sessions : Serialize / DeserializeUser
// ref: https://stackoverflow.com/questions/28691215/when-is-the-serialize-and-deserialize-passport-method-called-what-does-it-exact

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;