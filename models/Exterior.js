'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exterior = sequelize.define('Exterior', {
    painting_exterior: DataTypes.STRING,
    wall_cladding_type: DataTypes.STRING,
    wall_cladding_work_required: DataTypes.TEXT,
    base_cladding_type: DataTypes.STRING,
    base_cladding_work_required: DataTypes.TEXT,
    soffit_cladding_type: DataTypes.STRING,
    soffit_cladding_work_require: DataTypes.TEXT,
    exterior_joinery_type: DataTypes.STRING,
    exterior_joinery_work_required: DataTypes.TEXT,
    entrance_door_type: DataTypes.STRING,
    roof_pitch: DataTypes.STRING,
    roof_cladding_type: DataTypes.STRING,
    roof_work_required: DataTypes.TEXT,
    gutter_material: DataTypes.STRING,
    gutter_profile: DataTypes.STRING,
    downpipe_material: DataTypes.STRING,
    downpipe_profile: DataTypes.STRING,
    downpipe_work_required: DataTypes.TEXT,
    fascia_type: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  Exterior.associate = function(models) {
    // associations can be defined here
    Exterior.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete: 'cascade'});
  };
  return Exterior;
};