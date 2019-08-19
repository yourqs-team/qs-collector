const models = require('../models/index');
const Op = models.Sequelize.Op; // sequelizing models

exports.homePage =  (req, res) => {
  res.render('index', {title: "Home Page"});
};

exports.getUsers = (req, res) => {
  models.User
    .findAll()
    .then((users) => {
      res.json(users);
    });
}

exports.getUserRole = (req, res) =>{
  models.User
    .findAll({
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