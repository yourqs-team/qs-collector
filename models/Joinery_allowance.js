"use strict";
module.exports = (sequelize, DataTypes) => {
  const Joinery_allowance = sequelize.define(
    "Joinery_allowance",
    {
      kitchen: DataTypes.DOUBLE,
      laundry: DataTypes.DOUBLE,
      wardrobe_master_bed: DataTypes.DOUBLE,
      wardrobes_other: DataTypes.DOUBLE,
      other: DataTypes.STRING
    },
    { underscored: true, timestamps: false }
  );
  Joinery_allowance.associate = function(models) {
    // associations can be defined here
    Joinery_allowance.associate(models.Project, { foreignKey: "project_id" });
  };
  return Joinery_allowance;
};
