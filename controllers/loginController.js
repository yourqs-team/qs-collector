const passport = require("passport");
const User = require("../models").User;

exports.loginForm = (req, res) => {
  if(req.isAuthenticated()){
    res.redirect('/projects');
  }
  else{
    res.render('login', {title: 'Login'});
  }
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login', failureFlash: true, successRedirect: '/dashboard', successFlash: true});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You have sucessfully logged out!');
  res.redirect('/login');
}

// Middleware that protects url
exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
    return;
  }
  req.flash('error', 'Oops! You must log in first!');
  res.redirect('/login');
}
