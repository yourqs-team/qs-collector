const User = require("../models").User;
const { check, sanitize } = require("express-validator");
const Sequelize =  require("sequelize");
const nodemailer = require("../handlers/nodemailer");
const Op = Sequelize.Op;

exports.registerForm = (req, res) => {
  const orientation = ["Male", "Female", "Rather not to say"];

  res.render("register", { title: "Register", orientation });
};

exports.createUser = (req, res) => {

  const orientation = ["Male", "Female", "Rather not to say"];
  let user = {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPass,
    gender,
    contact,
    company,
    address
  } = req.body;

  if(!user.firstname || !user.lastname || !user.username || !user.email || !user.password || !user.confirmPass || !user.gender || !user.contact || !user.company || !user.address) {
    res.status(302);
    req.flash("error", "please fill up all the fields");
    res.render("register", {orientation});
  }

  if (password != confirmPass) {
    res.status(302);
    req.flash("error", "passwords don't match");
    res.render("register", {orientation});
  }

  User.create({ ...user, RoleId: 2 }).then(() => {
    nodemailer(req, res);
    req.flash("success", "You have successfully registered");
    res.redirect("/login");
  });
  
};
