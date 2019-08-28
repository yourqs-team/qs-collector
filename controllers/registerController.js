exports.registerForm = (req, res) => {
  const orientation = [
    'Male', 
    'Female', 
    'Rather not to say'
  ];

  res.render('register', {title: 'Register', orientation});
}