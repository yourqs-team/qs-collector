'use strict';
module.exports = (sequelize, DataTypes) => {
  const Safety_requirements = sequelize.define('Safety_requirement', {
    site_sign: DataTypes.BOOLEAN,
    fall_in_protection: DataTypes.BOOLEAN,
    crossing_protection: DataTypes.BOOLEAN,
    security_fencing: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Safety_requirements.associate = function(models) {
    // associations can be defined here
    Safety_requirements.belongsTo(models.Project, {foreignKey: 'ProjectId'});
  };
  return Safety_requirements;
};