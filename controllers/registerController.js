const User = require("../models").User;

const orientation = () => {
  return;
};

exports.registerForm = (req, res) => {
  const orientation = ["Male", "Female", "Rather not to say"];

  res.render("register", { title: "Register", orientation });
};

exports.createUser = (req, res) => {
  let {
    username,
    password,
    confirmPass,
    email,
    contact,
    firstname,
    lastname,
    gender,
    birthday,
    company,
    address
  } = req.body;

  if (!username || !password || !email || !contact || !firstname) {
    req.flash("error", "Please fill up all the fields");
    res.render("register", { title: "Register", orientation });
  }

  // User.create({
  //   username,
  //   password,
  //   email,
  //   contact,
  //   firstname,
  //   lastname,
  //   gender,
  //   birthday,
  //   company,
  //   address
  // }).then(() => {
  //   User.findOrCreate({ where: { username } }).then(([user, created]) => {
  //     console.log(user);
  //   });
  // });
};
