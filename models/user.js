'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};