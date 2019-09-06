'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temporary_service = sequelize.define('Temporary_service', {
    temporary_power: DataTypes.BOOLEAN,
    temporary_water: DataTypes.BOOLEAN,
    site_shed: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});

  Temporary_service.prototype.TempPowerToYesNo = function() {
    if (this.temporary_power === true){
      return "Yes"
    }

    return "No"
  };

  Temporary_service.prototype.TempWaterToYesNo = function() {
    if (this.temporary_water === true){
      return "Yes"
    }

    return "No"
  };

  Temporary_service.associate = function(models) {
    // associations can be defined here
    Temporary_service.belongsTo(models.Project, {foreignKey: 'ProjectId', onDelete: 'cascade'});
  };
  return Temporary_service;
};