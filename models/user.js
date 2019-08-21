'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {},
  {
    instanceMethods: {
      validPassword: function(password) {
        return (this.password === password);
      }
    }
  });
  

  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, {foreignKey: 'role_id'});
  };
  
  return User;
};