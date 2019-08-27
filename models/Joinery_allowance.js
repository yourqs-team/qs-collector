'use strict';
module.exports = (sequelize, DataTypes) => {
  const Joinery_allowance = sequelize.define('Joinery_allowance', {
    kitchen: DataTypes.DOUBLE,
    laundry: DataTypes.DOUBLE,
    wardrobe_master_bed: DataTypes.DOUBLE,
    wardrobes_other: DataTypes.STRING,
    wardrobe_other_amount: DataTypes.DOUBLE,
    other: DataTypes.STRING,
    other_amount: DataTypes.DOUBLE,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Joinery_allowance.associate = function(models) {
    // associations can be defined here
    Joinery_allowance.belongsTo(models.Project, {foreignKey: "ProjectId"});
  };
  return Joinery_allowance;
};