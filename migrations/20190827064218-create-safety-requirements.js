'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Safety_requirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      site_sign: {
        type: Sequelize.BOOLEAN
      },
      fall_in_protection: {
        type: Sequelize.STRING
      },
      crossing_protection: {
        type: Sequelize.STRING
      },
      security_fencing: {
        type: Sequelize.STRING
      },
      ProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Safety_requirements');
  }
};