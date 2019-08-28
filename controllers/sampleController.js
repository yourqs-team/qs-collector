const models = require('../models/index');
const Op = models.Sequelize.Op; // sequelizing models

exports.homePage =  (req, res) => {
  // res.render('index', {title: "Home Page"});
  res.redirect('/login');
};

exports.emailSample =  (req, res) => {
  res.render('email-templates/successRegister', {title: ""});
  // res.redirect('/login');
};

exports.dashboard = (req, res) => {
  res.render('dashboard-layout', {title: "Dashboard"});
}

exports.getUsers = (req, res) => {
  models.Role
    .findAll({
      include: [models.User]
    })
    .then((users) => {
      console.log(users);
    });
}

exports.getUserRole = (req, res) =>{
  models.User
    .findOne({
      attributes: ['username', 'firstname', 'lastname', 'birthday'],
      include:[
        {
          model: models.Role,
          where: {
            description: 'Admin' // filter only with description of 'Admin' value
          }
        }
      ],
    })
    .then((users) => {
      res.json(users);
    })
    .catch((error) =>{
      console.log(error);
    });
}



// register JS
exports.register = (req, res) => {

}