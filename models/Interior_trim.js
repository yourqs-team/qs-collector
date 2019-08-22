"use strict";
module.exports = (sequelize, DataTypes) => {
  const Interior_trim = sequelize.define(
    "Interior_trim",
    {
      scotia_type: DataTypes.STRING,
      skirting_type: DataTypes.STRING,
      window_architrave: DataTypes.STRING,
      door_architrave: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Interior_trim.associate = function(models) {
    // associations can be defined here
    Interior_trim.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Interior_trim;
};
