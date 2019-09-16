const User = require("../models").User;
const Session = require("../models").Session;
const mail = require("../handlers/mail");

exports.changePassword = async (req, res) => {
  
  // select the user
  user = await User.findOne({ where: { username: req.user.username } });

  if(req.body.old_password != user.password){
    req.flash("error", `Change Password - Wrong Old Password. Please try again.`);
    res.redirect('/projects');
    return;
  }

  // update db
  await user.update({
    password: req.body.new_password
  });

  // update session
  req.session.passport.user.password = req.body.new_password;

  //  success and redirect to projects
  req.flash("success", `You have successfully updated your profile picture`);
  res.redirect('/projects');
  return;
}

exports.forgotPasswordForm = async (req, res) => {
  res.render('forgotPasswordForm', {title: "Forgot Password", userData: req.body});
}

exports.forgotPassword = async (req, res) => {
  
  user = await User.findOne({ where: { email: req.body.email } });
  // Validate query
  if (!user){
    req.flash("error", `Not Registered User. Please register first.`);
    res.render('forgotPasswordForm', {title: "Forgot Password", userData: req.body});
    return;
  }

  //If there's registered user, Send Email
  // Prepare options for email first
  const receiverEmail = req.body.email;
  const firstname = user.firstname;
  const username = user.username;
  const password = user.password;
  const localURL = `http://${req.headers.host}/login`;

  // send email using mail.send(options) method coming from handlers/mail
  await mail.send({
    to: receiverEmail, 
    filename: 'forgotPassword',
    subject: 'YourQS - Forgot Password',
    firstname,
    localURL,
    username,
    password
  });


  // Redirect to Login
  req.flash("success", `\nWe sent an email to ${req.body.email}. Please wait for the email notification shortly.`);
  res.redirect('/login');
}