'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions', {
    data: DataTypes.STRING,
    expires: DataTypes.DATE
  }, {});
  Sessions.associate = function(models) {
    // associations can be defined here
  };
  return Sessions;
};