'use strict';
const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    project_code: DataTypes.STRING,
    project_address: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {});

  Project.prototype.encodeProjCode = function(id) {
    return hashids.encode(id);
  };

  Project.prototype.decodeProjCode = function(id) {
    return hashids.decode(id);
  };

  Project.prototype.generateProjCode = function() {
    return hashids.encode(this.id);
  }
  
  Project.associate = function(models) {
    Project.belongsTo(models.User, {foreignKey: 'UserId'});

    //Project
    Project.hasOne(models.Manpower);
    Project.hasOne(models.Site_arrangement);
    Project.hasOne(models.Safety_requirement);
    Project.hasOne(models.Allowance_and_insurance);
    Project.hasOne(models.Temporary_service);
    Project.hasOne(models.Proffesional_service_allowance);

    //Exterior
    Project.hasOne(models.Exterior);
    Project.hasOne(models.Hard_landscaping);
    
    //Interior
    Project.hasOne(models.Interior);
    Project.hasOne(models.Interior_trim);
    Project.hasOne(models.Interior_finish);
    Project.hasOne(models.Window_and_door);
    Project.hasOne(models.Joinery_allowance);
    Project.hasOne(models.Electrical); // added this
    Project.hasOne(models.Plumbing);
    Project.hasOne(models.Drainage);
    Project.hasOne(models.Other);
  };
  return Project;
};