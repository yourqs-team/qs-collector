var express = require('express');
var router = express.Router();
const models = require('../models/index');
const Op = models.Sequelize.Op;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

// get all users
router.get('/users', function(req, res, next){
  models.User.findAll()
    .then(function(users){
      res.json(users);
    });
});

module.exports = router;
