"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Plumbings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      allowance_type: {
        type: Sequelize.STRING
      },
      HWC: {
        type: Sequelize.STRING
      },
      new_connection: {
        type: Sequelize.BOOLEAN
      },
      comments: {
        type: Sequelize.TEXT
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Plumbings");
  }
};
