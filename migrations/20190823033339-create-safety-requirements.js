"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Safety_requirements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      site_sign: {
        type: Sequelize.BOOLEAN
      },
      security_fencing: {
        type: Sequelize.STRING
      },
      fall_in_protection: {
        type: Sequelize.BOOLEAN
      },
      crossing_protection: {
        type: Sequelize.BOOLEAN
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Safety_requirements");
  }
};
