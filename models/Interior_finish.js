"use strict";
module.exports = (sequelize, DataTypes) => {
  const Interior_finish = sequelize.define(
    "Interior_finish",
    {
      kitchen_floor_covering: DataTypes.STRING,
      kitchen_wall_finish: DataTypes.STRING,
      living_floor_covering: DataTypes.STRING,
      living_wall_finish: DataTypes.STRING,
      bedrooms_floor_covering: DataTypes.STRING,
      bedrooms_wall_finish: DataTypes.STRING,
      bathrooms_floor_covering: DataTypes.STRING,
      bathrooms_wall_finish: DataTypes.STRING,
      ensuite_floor_covering: DataTypes.STRING,
      ensuite_wall_finish: DataTypes.STRING,
      laundry_floor_covering: DataTypes.STRING,
      laundry_wall_finish: DataTypes.STRING,
      other_floor_covering: DataTypes.STRING,
      other_wall_finish: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Interior_finish.associate = function(models) {
    // associations can be defined here
    Interior_finish.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Interior_finish;
};
