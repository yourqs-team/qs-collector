const User = require("../models").User;
const Session = require("../models").Session;
const a_key = process.env.ADDY_KEY || "key";
const a_secret = process.env.ADDY_SECRET || "secret";

exports.editUserForm = async (req, res) => {
  const userData = req.user;
  res.render('editUser', {title: 'Update Profile', userData, a_key, a_secret});
}

exports.updateUser = async (req, res) => {
  const user_id = req.user.id;

  const user = await User.findOne({ where: { id: user_id } });

  // Update User Profile
  await user.update({
    firstname: req.sanitize('firstname').trim(),
    lastname: req.sanitize('lastname').trim(),
    gender: req.body.gender,
    contact: req.sanitize('contact').trim(),
    company: req.sanitize('company').trim(),
    address: req.sanitize('address').trim(),
  });

  // Update session
  req.session.passport.user.firstname = req.sanitize('firstname').trim();
  req.session.passport.user.lastname = req.sanitize('lastname').trim();
  req.session.passport.user.gender = req.body.gender;
  req.session.passport.user.contact = req.sanitize('contact').trim(),
  req.session.passport.user.company = req.sanitize('company').trim();
  req.session.passport.user.address = req.sanitize('address').trim();

  // message success
  req.flash('success', 'You have successfuly updated your profile.');
  res.redirect('/user');
}
