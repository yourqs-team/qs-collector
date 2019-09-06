'use strict';
module.exports = (sequelize, DataTypes) => {
  const Other = sequelize.define('Other', {
    demolition: DataTypes.TEXT,
    renovation: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Other.associate = function(models) {
    // associations can be defined here
    Other.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete:'cascade'});
  };
  return Other;
};