"use strict";
module.exports = (sequelize, DataTypes) => {
  const Window_and_door = sequelize.define(
    "Window_and_door",
    {
      interior_door_type: DataTypes.STRING,
      door_hardware: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Window_and_door.associate = function(models) {
    // associations can be defined here
    Window_and_door.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Window_and_door;
};
