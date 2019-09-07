'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interior = sequelize.define('Interior', {
    painting_interior: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Interior.associate = function(models) {
    // associations can be defined here
    Interior.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete: 'cascade', hooks: true});
  };
  return Interior;
};