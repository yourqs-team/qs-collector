"use strict";
module.exports = (sequelize, DataTypes) => {
  const Other = sequelize.define(
    "Other",
    {
      demolition: DataTypes.TEXT,
      renovation: DataTypes.TEXT,
      comments: DataTypes.TEXT,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Other.associate = function(models) {
    // associations can be defined here
    Other.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Other;
};
