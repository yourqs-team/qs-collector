"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Allowance_and_insurances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estimated_project_duration: {
        type: Sequelize.INTEGER
      },
      all_risk_insurance: {
        type: Sequelize.BOOLEAN
      },
      building_guarantee: {
        type: Sequelize.STRING
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Allowance_and_insurances");
  }
};
