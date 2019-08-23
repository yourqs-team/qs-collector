"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Interior_finishes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kitchen_floor_covering: {
        type: Sequelize.STRING
      },
      kitchen_wall_finish: {
        type: Sequelize.STRING
      },
      living_floor_covering: {
        type: Sequelize.STRING
      },
      living_wall_finish: {
        type: Sequelize.STRING
      },
      bedrooms_floor_covering: {
        type: Sequelize.STRING
      },
      bedrooms_wall_finish: {
        type: Sequelize.STRING
      },
      bathrooms_floor_covering: {
        type: Sequelize.STRING
      },
      bathrooms_wall_finish: {
        type: Sequelize.STRING
      },
      ensuite_floor_covering: {
        type: Sequelize.STRING
      },
      ensuite_wall_finish: {
        type: Sequelize.STRING
      },
      laundry_floor_covering: {
        type: Sequelize.STRING
      },
      laundry_wall_finish: {
        type: Sequelize.STRING
      },
      other_floor_covering: {
        type: Sequelize.STRING
      },
      other_wall_finish: {
        type: Sequelize.STRING
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Interior_finishes");
  }
};
