"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Joinery_allowances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kitchen: {
        type: Sequelize.DOUBLE
      },
      laundry: {
        type: Sequelize.DOUBLE
      },
      wardrobe_master_bed: {
        type: Sequelize.DOUBLE
      },
      wardrobes_other: {
        type: Sequelize.DOUBLE
      },
      other: {
        type: Sequelize.STRING
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Joinery_allowances");
  }
};
