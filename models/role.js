"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      description: DataTypes.STRING
    },
    {
      // Customised config for sequelize
      timestamps: false,
    }
  );

  Role.associate = function(models) {
    Role.hasMany(models.User);
  };
  return Role;
};
