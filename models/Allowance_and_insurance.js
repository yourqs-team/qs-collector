"use strict";
module.exports = (sequelize, DataTypes) => {
  const Allowance_and_insurance = sequelize.define(
    "Allowance_and_insurance",
    {
      estimated_project_duration: DataTypes.INTEGER,
      all_risk_insurance: DataTypes.BOOLEAN,
      building_guarantee: DataTypes.STRING
    },
    { underscored: true, timestamps: false }
  );
  Allowance_and_insurance.associate = function(models) {
    // associations can be defined here
    Allowance_and_insurance.belongsTo(models.Project, {
      foreignKey: "project_id"
    });
  };
  return Allowance_and_insurance;
};
