'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hard_landscapings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deck_type: {
        type: Sequelize.STRING
      },
      deck_work_required: {
        type: Sequelize.TEXT
      },
      handrail_type: {
        type: Sequelize.STRING
      },
      handrail_work_required: {
        type: Sequelize.TEXT
      },
      paving_type: {
        type: Sequelize.STRING
      },
      paving_work_required: {
        type: Sequelize.TEXT
      },
      driveway_type: {
        type: Sequelize.STRING
      },
      driveway_work_required: {
        type: Sequelize.TEXT
      },
      fencing_type: {
        type: Sequelize.STRING
      },
      fencing_work_required: {
        type: Sequelize.TEXT
      },
      other_type: {
        type: Sequelize.STRING
      },
      other_work_required: {
        type: Sequelize.TEXT
      },
      ProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hard_landscapings');
  }
};