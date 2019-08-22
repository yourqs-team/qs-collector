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
    Project.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Project;
};
