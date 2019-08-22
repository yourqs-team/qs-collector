"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      project_name: DataTypes.STRING,
      project_code: DataTypes.STRING,
      project_address: DataTypes.TEXT
    },
    {}
  );
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Project;
};
