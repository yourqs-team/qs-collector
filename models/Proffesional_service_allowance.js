'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proffesional_service_allowance = sequelize.define('Proffesional_service_allowance', {
    plans: DataTypes.FLOAT,
    engineer: DataTypes.DOUBLE,
    council_fees: DataTypes.DOUBLE,
    geotechnical: DataTypes.DOUBLE,
    surveyor: DataTypes.DOUBLE,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Proffesional_service_allowance.associate = function(models) {
    // associations can be defined here
    Proffesional_service_allowance.belongsTo(models.Project, {foreignKey: 'ProjectId'});
  };
  return Proffesional_service_allowance;
};