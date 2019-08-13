'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions', {
    sid: {
      type: DataTypes.STRING(36),
      primaryKey: true
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT
  }, {});
  Sessions.associate = function(models) {
    // associations can be defined here
  };
  return Sessions;
};