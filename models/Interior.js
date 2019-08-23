"use strict";
module.exports = (sequelize, DataTypes) => {
  const Interior = sequelize.define(
    "Interior",
    {
      painting_interior: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Interior.associate = function(models) {
    // associations can be defined here
    Exterior.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Interior;
};
