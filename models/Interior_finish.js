'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interior_finish = sequelize.define('Interior_finish', {
    kitchen_floor_covering: DataTypes.STRING,
    kitchen_wall_finish: DataTypes.STRING,
    living_floor_covering: DataTypes.STRING,
    living_wall_finish: DataTypes.STRING,
    bedrooms_floor_covering: DataTypes.STRING,
    bedrooms_wall_finish: DataTypes.STRING,
    bathroom_floor_covering: DataTypes.STRING,
    bathroom_wall_finish: DataTypes.STRING,
    ensuite_floor_covering: DataTypes.STRING,
    ensuite_wall_finish: DataTypes.STRING,
    laundry_floor_covering: DataTypes.STRING,
    laundry_wall_finish: DataTypes.STRING,
    other_floor_covering: DataTypes.STRING,
    other_wall_finish: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Interior_finish.associate = function(models) {
    // associations can be defined here
    Interior_finish.belongsTo(models.Project, {foreignKey: "ProjectId"});
  };
  return Interior_finish;
};