const passport = require('passport');
const User = require('../models').User;

exports.loginForm = (req, res) => {
  res.render('login', {title: 'Login'});
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login', failureFlash: true, successRedirect: '/login', successFlash: true});


exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'you are now logged out!');
  req.redirect('/');
}