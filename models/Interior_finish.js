'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interior_finish = sequelize.define('Interior_finish', {
    kitchen_floor_covering: DataTypes.STRING,
    kitchen_wall_finish: DataTypes.STRING,
    kitchen_floor_covering_other: DataTypes.STRING,
    kitchen_wall_finish_other: DataTypes.STRING,
    living_floor_covering: DataTypes.STRING,
    living_wall_finish: DataTypes.STRING,
    living_floor_covering_other: DataTypes.STRING,
    living_wall_finish_other: DataTypes.STRING,
    bedrooms_floor_covering: DataTypes.STRING,
    bedrooms_wall_finish: DataTypes.STRING,
    bedrooms_floor_covering_other: DataTypes.STRING,
    bedrooms_wall_finish_other: DataTypes.STRING,
    bathroom_floor_covering: DataTypes.STRING,
    bathroom_wall_finish: DataTypes.STRING,
    bathroom_floor_covering_other: DataTypes.STRING,
    bathroom_wall_finish_other: DataTypes.STRING,
    ensuite_floor_covering: DataTypes.STRING,
    ensuite_wall_finish: DataTypes.STRING,
    ensuite_floor_covering_other: DataTypes.STRING,
    ensuite_wall_finish_other: DataTypes.STRING,
    laundry_floor_covering: DataTypes.STRING,
    laundry_wall_finish: DataTypes.STRING,
    laundry_floor_covering_other: DataTypes.STRING,
    laundry_wall_finish_other: DataTypes.STRING,
    other_floor_covering: DataTypes.STRING,
    other_wall_finish: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {timestamps: false});

  Interior_finish.prototype.kitchenFloorCoverPDF = function() {
    if(this.kitchen_floor_covering === "Other"){
      return "Other: " + this.kitchen_floor_covering_other
    }

    return this.kitchen_floor_covering
  };

  Interior_finish.prototype.livingFloorCoverPDF = function() {
    if(this.living_floor_covering === "Other"){
      return "Other: " + this.living_floor_covering_other
    }

    return this.living_floor_covering
  };

  Interior_finish.prototype.bedroomsFloorCoverPDF = function() {
    if(this.bedrooms_floor_covering === "Other"){
      return "Other: " + this.bedrooms_floor_covering_other
    }

    return this.bedrooms_floor_covering
  };

  Interior_finish.prototype.bathroomFloorCoverPDF = function() {
    if(this.bathroom_floor_covering === "Other"){
      return "Other: " + this.bathroom_floor_covering_other
    }

    return this.bathroom_floor_covering
  };
  

  Interior_finish.prototype.ensuiteFloorCoverPDF = function() {
    if(this.ensuite_floor_covering === "Other"){
      return "Other: " + this.ensuite_floor_covering_other
    }

    return this.ensuite_floor_covering
  };

  Interior_finish.prototype.laundryFloorCoverPDF = function() {
    if(this.laundry_floor_covering === "Other"){
      return "Other: " + this.laundry_floor_covering_other
    }

    return this.laundry_floor_covering
  };

  // Wall Finish

  Interior_finish.prototype.kitchenWallFinishPDF = function() {
    if(this.kitchen_wall_finish === "Other"){
      return "Other: " + this.kitchen_wall_finish_other
    }

    return this.kitchen_wall_finish
  };

  Interior_finish.prototype.livingWallFinishPDF = function() {
    if(this.living_wall_finish === "Other"){
      return "Other: " + this.living_wall_finish_other
    }

    return this.living_wall_finish
  };

  Interior_finish.prototype.bedroomsWallFinishPDF = function() {
    if(this.bedrooms_wall_finish === "Other"){
      return "Other: " + this.bedrooms_wall_finish_other
    }

    return this.bedrooms_wall_finish
  };

  Interior_finish.prototype.bathroomWallFinishPDF = function() {
    if(this.bathroom_wall_finish === "Other"){
      return "Other: " + this.bathroom_wall_finish_other
    }

    return this.bathroom_wall_finish
  };

  Interior_finish.prototype.ensuiteWallFinishPDF = function() {
    if(this.ensuite_wall_finish === "Other"){
      return "Other: " + this.ensuite_wall_finish_other
    }

    return this.ensuite_wall_finish
  };

  Interior_finish.prototype.laundryWallFinishPDF = function() {
    if(this.laundry_wall_finish === "Other"){
      return "Other: " + this.laundry_wall_finish_other
    }

    return this.laundry_wall_finish
  };


  Interior_finish.associate = function(models) {
    // associations can be defined here
    Interior_finish.belongsTo(models.Project, {foreignKey: "ProjectId", onDelete: 'cascade', hooks: true});
  };
  return Interior_finish;
};