const User = require("../models").User;
const { check, sanitize } = require("express-validator");
const Sequelize =  require("sequelize");
const mail = require("../handlers/mail");
const Op = Sequelize.Op;
// Addy Key and secret
const a_key = process.env.ADDY_KEY || "key";
const a_secret = process.env.ADDY_SECRET || "secret";

exports.registerForm = (req, res) => {
  res.render("register", { title: "Register", a_key, a_secret});
};

// Middleware for validation on registration form using express-validator
exports.validateRegisterForm = async (req, res, next) => {

  //1. Sanitize some of the forms
  req.sanitizeBody('firstname');
  req.sanitizeBody('lastname');
  req.sanitizeBody('username');
  req.sanitizeBody('company');

  //2. Validate empty strings
  req.checkBody('firstname', 'Fill up First Name!').notEmpty();
  req.checkBody('lastname', 'Fill up Last Name!').notEmpty();
  req.checkBody('username', 'Fill up Username!').notEmpty();
  req.checkBody('contact', 'Fill up Contact Number!').notEmpty();
  req.checkBody('birthday', 'Fill up birthday').notEmpty();
  req.checkBody('company', 'Fill up Company!').notEmpty();
  req.checkBody('address', 'Fill up Address!').notEmpty();

  //3. Validate Format Date
  req.checkBody('birthday', 'That Date is not valid!').isDate({format: 'DD-MM-YYYY'});

  //4. email validation and normalize it.
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });


  //5. confirm password
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
  req.checkBody('confirmPass', 'Confirmed Password cannot be blank!').notEmpty();
  req.checkBody('confirmPass', 'Oops! Your passwords do not match').equals(req.body.password);

  //6. confirm username/email is already registered
  const usernameForm = req.body.username
  const user = await User.findOne({where: {username: usernameForm }});
  const emailForm = req.body.email
  const email = await User.findOne({where: {email: emailForm }});

  if (user) {// if user exists
    req.flash('error', 'Username already is in use.');
  }

  if (email){
    req.flash('error', 'Email already is in use.');
  }

  // express-validator module calls validationErrors() method and returns objects
  const errors = req.validationErrors();
  if (errors || email || user) { // if there are any errors OR email exist OR username exist
    // return all error messages back to front end
    if (errors){
      req.flash('error', errors.map(err => err.msg));
    }
    // render pages
    res.render('register', { title: 'Register', userData: req.body, flashes: req.flash(), a_key, a_secret});
    return;
  }

  // Proceed here if there are NO errors

  // Prepare options for email first
  const firstname = req.body.firstname;
  const username = req.body.username;
  const password = req.body.password;
  const localURL = `http://${req.headers.host}/login`;

  // send email using mail.send(options) method coming from handlers/mail
  await mail.send({
    to: emailForm, 
    filename: 'successRegister',
    subject: 'YourQS - Your have successfully registered to our online app',
    firstname,
    localURL,
    username,
    password
  });
  

  // and lastly proceed to next function indicated on routes/index
  next();
}

exports.createUser = (req, res) => {
  // Automatically set user to client role
  req.body.RoleId = 2;

  User.create(req.body).then(() => {
    req.flash("success", "You have successfully registered");
    res.redirect("/login");
  });
  
};
