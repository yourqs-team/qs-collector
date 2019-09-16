const User = require("../models").User;
const Session = require("../models").Session;

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