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
          username: "jap",
          password: "jap123",
          email: "roaldjap@gmail.com",
          contact: "02080413349",
          firstname: "Jap",
          lastname: "Ignacio",
          gender: "Male",
          company: "QS Collector",
          address: "Far Far Away",
          birthday: new Date("08/01/1991").toISOString(),
          createdAt: new Date(),
          updatedAt: new Date(),
          RoleId: 1 // 1
        },
        {
          username: "marlon",
          password: "marlon123",
          email: "marlonspr17@gmail.com",
          contact: "02080413349",
          firstname: "Marlon",
          lastname: "Parra",
          gender: "Male",
          company: "QS Collector",
          address: "Close By",
          birthday: new Date("08/01/1991").toISOString(),
          createdAt: new Date(),
          updatedAt: new Date(),
          RoleId: 1  // 2
        },
        {
          username: "lazaro",
          password: "lazaro123",
          email: "lbreis.junior@gmail.com",
          contact: "02080413349",
          firstname: "Lazaro",
          lastname: "Junior",
          gender: "Male",
          company: "QS Collector",
          address: "Close By",
          birthday: new Date("08/01/1991").toISOString(),
          createdAt: new Date(),
          updatedAt: new Date(),
          RoleId: 1  // 2
        },
        {
          username: "nick",
          password: "nick123",
          email: "test@gmail.com",
          contact: "03040506078",
          firstname: "Nick",
          lastname: "Clements",
          gender: "Male",
          company: "QS Collector",
          address: "Close By",
          birthday: new Date("08/01/1991").toISOString(),
          createdAt: new Date(),
          updatedAt: new Date(),
          RoleId: 1  // 2
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
