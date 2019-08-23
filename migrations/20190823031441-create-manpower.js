"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Manpowers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      markup: {
        type: Sequelize.FLOAT
      },
      no_of_builders: {
        type: Sequelize.INTEGER
      },
      administration: {
        type: Sequelize.FLOAT
      },
      travel_distance: {
        type: Sequelize.FLOAT
      },
      travel_price: {
        type: Sequelize.FLOAT
      },
      supervision: {
        type: Sequelize.FLOAT
      },
      project_management: {
        type: Sequelize.FLOAT
      },
      no_vehicles: {
        type: Sequelize.INTEGER
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Manpowers");
  }
};
