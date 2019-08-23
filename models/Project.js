"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_name: DataTypes.STRING,
      project_code: DataTypes.STRING,
      project_address: DataTypes.TEXT
    },
    { underscored: true }
  );
  Project.associate = function(models) {
    // Belongs to one User
    Project.belongsTo(models.User, { foreignKey: "user_id" });

    // https://stackoverflow.com/questions/23128816/sequelize-js-ondelete-cascade-is-not-deleting-records-sequelize - cascade
    // Project
    Project.hasOne(models.Exterior, { onDelete: "cascade" /*, hooks: true */ }); // done
    Project.hasOne(models.Interior, { onDelete: "cascade" }); // done
    Project.hasOne(models.Manpower, { onDelete: "cascade" }); // done
    Project.hasOne(models.Site_arrangement, { onDelete: "cascade" }); // done
    Project.hasOne(models.Allowance_and_insurance, { onDelete: "cascade" }); // done
    Project.hasOne(models.Safety_requirement, { onDelete: "cascade" }); // done
    Project.hasOne(models.Temporary_service, { onDelete: "cascade" }); // done
    Project.hasOne(models.Proffesional_service_allowance, {
      onDelete: "cascade"
    }); // done

    // Project - Interior
    Project.hasOne(models.Window_and_door, { onDelete: "cascade" }); // done
    Project.hasOne(models.Interior_finish, { onDelete: "cascade" }); // done
    Project.hasOne(models.Joinery_allowance, { onDelete: "cascade" }); // done
    Project.hasOne(models.Plumbing, { onDelete: "cascade" }); // done
    Project.hasOne(models.Electrical, { onDelete: "cascade" }); // done
    Project.hasOne(models.Painting_interior, { onDelete: "cascade" }); // done
    Project.hasOne(models.Drainage, { onDelete: "cascade" }); // done
    Project.hasOne(models.Other, { onDelete: "cascade" }); // done
    Project.hasOne(models.Interior_trim, { onDelete: "cascade" }); // done

    // Project - Exterior
    Project.hasOne(models.Hard_landscaping, { onDelete: "cascade" }); // done
  };
  return Project;
};
