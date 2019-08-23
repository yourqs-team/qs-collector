"use strict";
module.exports = (sequelize, DataTypes) => {
  const Proffesional_service_allowance = sequelize.define(
    "Proffesional_service_allowance",
    {
      plans: DataTypes.DOUBLE,
      engineer: DataTypes.DOUBLE,
      council_fees: DataTypes.DOUBLE,
      geotechnical: DataTypes.DOUBLE,
      surveyor: DataTypes.DOUBLE,
      project_id: DataTypes.INTEGER
    },
    {}
  );
  Proffesional_service_allowance.associate = function(models) {
    // associations can be defined here
    Proffesional_service_allowance.belongsTo(models.Project, {
      foreignKey: "project_id"
    });
  };
  return Proffesional_service_allowance;
};
