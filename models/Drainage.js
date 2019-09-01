'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drainage = sequelize.define('Drainage', {
    new_connections: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});
  
  Drainage.prototype.newConnectionToYesNo = function(){
    if (this.new_connections === true){
          return "Yes"
    }

    return "No"
  };

  Drainage.associate = function(models) {
    // associations can be defined here
    Drainage.belongsTo(models.Project, {foreignKey: "ProjectId"});
  };
  return Drainage;
};