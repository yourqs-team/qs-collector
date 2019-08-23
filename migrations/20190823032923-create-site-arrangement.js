"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Site_arrangements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      site_access: {
        type: Sequelize.STRING
      },
      space_for_material_storage: {
        type: Sequelize.STRING
      },
      living_arrangement: {
        type: Sequelize.STRING
      },
      carpet_protection: {
        type: Sequelize.BOOLEAN
      },
      comment: {
        type: Sequelize.TEXT
      },
      allow_extra_site_specific_time: {
        type: Sequelize.INTEGER
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Site_arrangements");
  }
};
