'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Manpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      markup: {
        type: Sequelize.FLOAT
      },
      no_builder: {
        type: Sequelize.INTEGER
      },
      administration: {
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
      travel_distance: {
        type: Sequelize.FLOAT
      },
      travel_price: {
        type: Sequelize.FLOAT
      },
      ProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Manpowers');
  }
};