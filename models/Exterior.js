"use strict";
module.exports = (sequelize, DataTypes) => {
  const Exterior = sequelize.define(
    "Exterior",
    {
      painting_exterior: DataTypes.STRING,
      wall_cladding_type: DataTypes.STRING,
      wall_cladding_work_required: DataTypes.TEXT,
      base_cladding_type: DataTypes.STRING,
      base_cladding_work_required: DataTypes.TEXT,
      soffit_type: DataTypes.STRING,
      soffit_work_required: DataTypes.TEXT,
      exterior_joinery_type: DataTypes.STRING,
      exterior_joinery_work_required: DataTypes.TEXT,
      entrance_door_type: DataTypes.STRING,
      entrance_door_work_required: DataTypes.TEXT,
      roof_pitch: DataTypes.STRING,
      roof_cladding_type: DataTypes.STRING,
      roof_work_required: DataTypes.TEXT,
      gutter_material: DataTypes.STRING,
      gutter_profile: DataTypes.STRING,
      downpipe_material: DataTypes.STRING,
      downpipe_work_required: DataTypes.TEXT,
      downpipe_profile: DataTypes.STRING,
      fascia_type: DataTypes.STRING
    },
    { underscored: true, timestamps: false }
  );
  Exterior.associate = function(models) {
    Exterior.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Exterior;
};
