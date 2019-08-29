'use strict';
module.exports = (sequelize, DataTypes) => {
  const Electrical = sequelize.define('Electrical', {
    allowance_type: DataTypes.STRING,
    distribution_board: DataTypes.STRING,
    new_connection: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Electrical.associate = function(models) {
    // associations can be defined here
    Electrical.belongsTo(models.Project, {foreignKey: "ProjectId"});
  };
  return Electrical;
};