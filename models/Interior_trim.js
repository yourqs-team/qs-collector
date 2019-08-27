'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interior_trim = sequelize.define('Interior_trim', {
    scotia_type: DataTypes.STRING,
    skirting_type: DataTypes.STRING,
    window_architrave: DataTypes.STRING,
    door_architrave: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Interior_trim.associate = function(models) {
    // associations can be defined here
    Interior_trim.belongsTo(models.Project, {foreignKey: "ProjectId"});
  };
  return Interior_trim;
};