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
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1
        }
      ],
      { underscored: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  }
};
