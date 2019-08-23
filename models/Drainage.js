"use strict";
module.exports = (sequelize, DataTypes) => {
  const Drainage = sequelize.define(
    "Drainage",
    {
      new_connections: DataTypes.BOOLEAN,
      comments: DataTypes.TEXT,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Drainage.associate = function(models) {
    // associations can be defined here
    Drainage.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Drainage;
};
