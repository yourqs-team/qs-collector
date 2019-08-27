"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      contact: DataTypes.DATE,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.DATE,
      company: DataTypes.DATE,
      address: DataTypes.DATE
    },
    {}
  );

  // Define your instanceMethods here :
  // reference: https://stackoverflow.com/questions/45616646/sequelize-instancemethods/45616832
  User.prototype.validPassword = function(password) {
    return this.password === password;
  };

  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role);
    User.hasMany(models.Project);
  };

  return User;
};
