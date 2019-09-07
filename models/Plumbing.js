'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plumbing = sequelize.define('Plumbing', {
    allowance_type: DataTypes.STRING,
    HWC: DataTypes.STRING,
    new_connection: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});

  Plumbing.prototype.newConnectionToYesNo = function() {
    if (this.new_connection === true){
      return "Yes"
    }
    
    return "No"
  }
  Plumbing.associate = function(models) {
    // associations can be defined here
    Plumbing.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete: 'cascade', hooks: true});
  };
  return Plumbing;
};