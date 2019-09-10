const models = require('../models/index');
const Op = models.Sequelize.Op;
const User = models.User; // sequelizing models



exports.homePage = (req, res) => {
  // res.render('index', {title: "Home Page"});
  res.redirect('/login');
};

exports.emailSample = (req, res) => {
  res.render('email-templates/successRegister', {title: ""});
};

exports.getUsers = async (req, res) => {
    const user = await User.findAll({ attributes: ['username', 'firstname', 'lastname', 'birthday'],});
    res.json(user);
}

exports.getUserRole = async (req, res) =>{
  const user = await User.findOne({
    attributes: ['username', 'firstname', 'lastname', 'birthday'],
    include:[{ model: models.Role,
        where: {
          description: 'Admin' // filter only with description of 'Admin' value
        }
    }],
  });

  res.json(user);
}






