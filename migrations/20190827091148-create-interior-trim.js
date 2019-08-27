'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Interior_trims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scotia_type: {
        type: Sequelize.STRING
      },
      skirting_type: {
        type: Sequelize.STRING
      },
      window_architrave: {
        type: Sequelize.STRING
      },
      door_architrave: {
        type: Sequelize.STRING
      },
      ProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Interior_trims');
  }
};