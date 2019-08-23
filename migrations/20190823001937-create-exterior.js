"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Exteriors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      painting_exterior: {
        type: Sequelize.STRING
      },
      wall_cladding_type: {
        type: Sequelize.STRING
      },
      wall_cladding_exterior_work_required: {
        type: Sequelize.TEXT
      },
      base_cladding_type: {
        type: Sequelize.STRING
      },
      base_cladding_work_required: {
        type: Sequelize.TEXT
      },
      soffit_cladding_type: {
        type: Sequelize.STRING
      },
      soffit_work_required: {
        type: Sequelize.TEXT
      },
      exterior_joinery_type: {
        type: Sequelize.STRING
      },
      exterior_joinery_work_required: {
        type: Sequelize.TEXT
      },
      entrance_door_type: {
        type: Sequelize.STRING
      },
      entrance_door_work_required: {
        type: Sequelize.TEXT
      },
      roof_pitch: {
        type: Sequelize.STRING
      },
      roof_cladding_type: {
        type: Sequelize.STRING
      },
      roof_work_required: {
        type: Sequelize.TEXT
      },
      gutter_material: {
        type: Sequelize.STRING
      },
      gutter_profile: {
        type: Sequelize.STRING
      },
      downpipe_material: {
        type: Sequelize.STRING
      },
      downpipe_work_required: {
        type: Sequelize.TEXT
      },
      downpipe_profile: {
        type: Sequelize.STRING
      },
      fascia_type: {
        type: Sequelize.STRING
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Exteriors");
  }
};
