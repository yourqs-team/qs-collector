const models = require('../models/index');
const Op = models.Sequelize.Op; // sequelizing models

exports.homePage =  (req, res) => {
  res.render('index', {title: "Home Page"});
};

exports.getUsers = async (req, res) => {
  models.User
    .findAll()
    .then((users) => {
      res.json(users);
    });
}