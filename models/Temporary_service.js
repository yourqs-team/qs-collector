"use strict";
module.exports = (sequelize, DataTypes) => {
  const Temporary_service = sequelize.define(
    "Temporary_service",
    {
      temporary_power: DataTypes.BOOLEAN,
      temporary_water: DataTypes.BOOLEAN,
      site_shed: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Temporary_service.associate = function(models) {
    // associations can be defined here
    Temporary_service.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Temporary_service;
};
