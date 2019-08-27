'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proffesional_service_allowances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plans: {
        type: Sequelize.DOUBLE
      },
      engineer: {
        type: Sequelize.DOUBLE
      },
      council_fees: {
        type: Sequelize.DOUBLE
      },
      geotechnical: {
        type: Sequelize.DOUBLE
      },
      surveyor: {
        type: Sequelize.DOUBLE
      },
      ProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proffesional_service_allowances');
  }
};