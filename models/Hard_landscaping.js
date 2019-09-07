'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hard_landscaping = sequelize.define('Hard_landscaping', {
    deck_type: DataTypes.STRING,
    deck_work_required: DataTypes.TEXT,
    handrail_type: DataTypes.STRING,
    handrail_work_required: DataTypes.TEXT,
    paving_type: DataTypes.STRING,
    paving_work_required: DataTypes.TEXT,
    driveway_type: DataTypes.STRING,
    driveway_work_required: DataTypes.TEXT,
    fencing_type: DataTypes.STRING,
    fencing_work_required: DataTypes.TEXT,
    other_type: DataTypes.STRING,
    other_work_required: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Hard_landscaping.associate = function(models) {
    // associations can be defined here
    Hard_landscaping.belongsTo(models.Project, {foreignKey: 'ProjectId', onDelete: 'cascade', hooks: true});
  };
  return Hard_landscaping;
};