'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manpower = sequelize.define('Manpower', {
    markup: DataTypes.FLOAT,
    no_builder: DataTypes.INTEGER,
    administration: DataTypes.FLOAT,
    supervision: DataTypes.FLOAT,
    project_management: DataTypes.FLOAT,
    no_vehicles: DataTypes.INTEGER,
    travel_distance: DataTypes.FLOAT,
    travel_price: DataTypes.FLOAT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Manpower.associate = function(models) {
    Manpower.belongsTo(models.Project, {foreignKey: 'ProjectId'});
  };
  return Manpower;
};