"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      role_id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: DataTypes.STRING
    },
    {
      // Customised config for sequelize
      timestamps: false
    }
  );

  Role.associate = function(models) {
    Role.hasMany(models.User);
  };
  return Role;
};
