'use strict';
const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    project_status: DataTypes.STRING,
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

  Project.prototype.createdAtToNZTime = function(){
    return moment(this.createdAt).format('DD/MM/YYYY')
  }
  
  Project.associate = function(models) {
    Project.belongsTo(models.User, {foreignKey: 'UserId'});

    //Project
    Project.hasOne(models.Manpower, {onDelete: 'cascade', hooks: true});
    Project.hasOne(models.Site_arrangement, {onDelete: 'cascade', hooks: true});
    Project.hasOne(models.Safety_requirement, {onDelete: 'cascade', hooks: true});
    Project.hasOne(models.Allowance_and_insurance, {onDelete: 'cascade', hooks: true});
    Project.hasOne(models.Temporary_service, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Proffesional_service_allowance, {onDelete: 'cascade' , hooks: true});

    //Exterior
    Project.hasOne(models.Exterior, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Hard_landscaping, {onDelete: 'cascade' , hooks: true});
    
    //Interior
    Project.hasOne(models.Interior, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Interior_trim, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Interior_finish, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Window_and_door, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Joinery_allowance, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Electrical, {onDelete: 'cascade' , hooks: true}); // added this
    Project.hasOne(models.Plumbing, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Drainage, {onDelete: 'cascade' , hooks: true});
    Project.hasOne(models.Other, {onDelete: 'cascade' , hooks: true});
  };
  return Project;
};