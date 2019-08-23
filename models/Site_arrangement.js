"use strict";
module.exports = (sequelize, DataTypes) => {
  const Site_arrangement = sequelize.define(
    "Site_arrangement",
    {
      site_access: DataTypes.STRING,
      space_for_material_storage: DataTypes.STRING,
      living_arrangement: DataTypes.STRING,
      carpet_protection: DataTypes.BOOLEAN,
      comment: DataTypes.TEXT,
      allow_extra_site_specific_time: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER
    },
    { underscored: true, timestamps: false }
  );
  Site_arrangement.associate = function(models) {
    // associations can be defined here
    Site_arrangement.belongsTo(models.Project, { foreignKey: "project_id" });
  };
  return Site_arrangement;
};
