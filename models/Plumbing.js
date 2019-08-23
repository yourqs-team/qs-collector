"use strict";
module.exports = (sequelize, DataTypes) => {
  const Plumbing = sequelize.define(
    "Plumbing",
    {
      allowance_type: DataTypes.STRING,
      HWC: DataTypes.STRING,
      new_connection: DataTypes.BOOLEAN,
      comments: DataTypes.TEXT,
      project_id: DataTypes.INTEGER
    },
    { underscored: false, timestamps: true }
  );
  Plumbing.associate = function(models) {
    // associations can be defined here
    Plumbing.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Plumbing;
};
