"use strict";

const Role = require("../models").Role;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const role = await Role.findOne({
      where: {
        description: "Admin"
      }
    });

    // Seed all Roles first
    if (!role) {
      await queryInterface.bulkInsert(
        "Roles",
        [
          {
            description: "Admin" // role_id: 1
          },
          {
            description: "Client" // role_id: 2
          }
        ],
        {}
      );
    }

    // Seed user with defined roles from above
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: "admin",
          email: "test@gmail.com",
          contact: "02080413349",
          firstname: "Jap",
          lastname: "Ignacio",
          gender: "Male",
          company: "Initar",
          address: "Far Far Away",
          birthday: new Date("08/01/1991").toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          role_id: 1 // 1
        },
        {
          username: "marlon",
          password: "123marlon",
          email: "test@gmail.com",
          contact: "02080413349",
          firstname: "Marlon",
          lastname: "Parra",
          gender: "Male",
          company: "Initar",
          address: "Close By",
          birthday: new Date("08/01/1991").toISOString(),
          created_at: new Date(),
          updated_at: new Date(),
          role_id: 2  // 2
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*+
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    await queryInterface.bulkDelete("Roles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  }
};
