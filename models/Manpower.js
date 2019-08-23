"use strict";
module.exports = (sequelize, DataTypes) => {
  const Manpower = sequelize.define(
    "Manpower",
    {
      markup: DataTypes.FLOAT,
      no_of_builders: DataTypes.INTEGER,
      administration: DataTypes.FLOAT,
      travel_distance: DataTypes.FLOAT,
      travel_price: DataTypes.FLOAT,
      supervision: DataTypes.FLOAT,
      project_management: DataTypes.FLOAT,
      no_vehicles: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Manpower.associate = function(models) {
    // associations can be defined here
    Manpower.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Manpower;
};
