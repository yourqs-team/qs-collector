"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_name: DataTypes.STRING,
      project_code: DataTypes.STRING,
      project_address: DataTypes.TEXT
    },
    { underscored: true }
  );
  Project.associate = function(models) {
    // Belongs to one User
    Project.belongsTo(models.User, { foreignKey: "user_id" });
    // Project
    Project.hasOne(models.Exterior);
    Project.hasOne(models.Interior);
    Project.hasOne(models.Manpower);
    Project.hasOne(models.Site_arrangement);
    Project.hasOne(models.Allowance_and_insurance);
    Project.hasOne(models.Safety_requirement);
    Project.hasOne(models.Temporary_service);
    Project.hasOne(models.Proffesional_service_allowance);

    // Project - Interior
    Project.hasOne(models.Window_and_door);
    Project.hasOne(models.Interior_finish);
    Project.hasOne(models.Joinery_allowance);
    Project.hasOne(models.Plumbing);
    Project.hasOne(models.Electrical);
    Project.hasOne(models.Painting_interior);
    Project.hasOne(models.Drainage);
    Project.hasOne(models.Other);
    Project.hasOne(models.Interior_trim);

    // Project - Exterior
    Project.hasOne(models.Hard_landscaping);
  };
  return Project;
};
