'use strict';
module.exports = (sequelize, DataTypes) => {
  const Allowance_and_insurance = sequelize.define('Allowance_and_insurance', {
    estimated_project_duration: DataTypes.INTEGER,
    risk_insurance: DataTypes.BOOLEAN,
    building_guarantee: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});

  Allowance_and_insurance.prototype.riskInsuranceToYesNo = function() {
    if (this.risk_insurance === true){
      return "Yes"
    }

    return "No"
  };

  Allowance_and_insurance.associate = function(models) {
    // associations can be defined here
    Allowance_and_insurance.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete: 'cascade'});
  };
  return Allowance_and_insurance;
};