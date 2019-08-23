"use strict";
module.exports = (sequelize, DataTypes) => {
  const Safety_requirements = sequelize.define(
    "Safety_requirement",
    {
      site_sign: DataTypes.BOOLEAN,
      security_fencing: DataTypes.STRING,
      fall_in_protection: DataTypes.BOOLEAN,
      crossing_protection: DataTypes.BOOLEAN,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Safety_requirement.associate = function(models) {
    // associations can be defined here
    Safety_requirement.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Safety_requirements;
};
