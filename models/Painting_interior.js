"use strict";
module.exports = (sequelize, DataTypes) => {
  const Painting_interior = sequelize.define(
    "Painting_interior",
    {
      painting_interior: DataTypes.STRING
    },
    { underscored: true, timestamps: false }
  );
  Painting_interior.associate = function(models) {
    // associations can be defined here
    Project_interior.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Painting_interior;
};
