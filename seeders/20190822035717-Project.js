"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Projects",
      [
        {
          project_name: "My Dream House",
          project_code: "XY109",
          project_address: "My Neighbours' Backyard",
          created_at: new Date(),
          updated_at: new Date(),
          user_id: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  }
};
