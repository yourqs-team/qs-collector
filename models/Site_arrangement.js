'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site_arrangement = sequelize.define('Site_arrangement', {
    site_access: DataTypes.STRING,
    space_for_material_storage: DataTypes.STRING,
    comment: DataTypes.TEXT,
    living_arrangement: DataTypes.STRING,
    carpet_protection: DataTypes.BOOLEAN,
    allow_extra_site_specific_time: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});

  Site_arrangement.prototype.carpetToYesNo = function() {
    if (this.carpet_protection === true){
      return "Yes"
    }

    return "No"
  };

  Site_arrangement.associate = function(models) {
    // associations can be defined here
    Site_arrangement.belongsTo(models.Project, {foreignKey: 'ProjectId', onDelete: 'cascade'});
  };
  return Site_arrangement;
};