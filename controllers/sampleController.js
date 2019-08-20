const models = require('../models/index');
const Op = models.Sequelize.Op; // sequelizing models

exports.homePage =  (req, res) => {
  res.render('index', {title: "Home Page"});
};

exports.getUsers = (req, res) => {
  models.User
    .findAll()
    .then((users) => {
      res.json(users);
    });
}

exports.getUserRole = (req, res) =>{
  models.User
    .findAll({
      attributes: ['username', 'firstname', 'lastname', 'birthday'],
      include:[
        {
          model: models.Role,
          where: {
            description: 'Admin' // filter only with description of 'Admin' value
          }
        }
      ],
    })
    .then((users) => {
      res.json(users);
    })
    .catch((error) =>{
      console.log(error);
    });
}

// Login js
const passport = require('passport');
const User = require('../models').User;
const passportLocalSequelize = require('passport-local-sequelize');

exports.loginForm = (req, res) => {
  res.render('login', {title: 'Login'});
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login', failureFlash: true});

passportLocalSequelize.attachToUser(User, {
  usernameField: 'username'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'you are now logged out!');
  req.redirect('/');
}

// register JS
exports.register = (req, res) => {

}