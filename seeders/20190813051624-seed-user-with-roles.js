'use strict';


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
       
    // Seed all Roles first
    await queryInterface.bulkInsert('Roles', [
      {
        description: 'Admin', // role_id: 1
      },
      {
        description: 'Client', // role_id: 2
      }
    ], {});

    // Seed user with defined roles from above
    return await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: 'admin',
        email: 'test@gmail.com',
        firstname: 'Jap',
        lastname: 'Ignacio',
        gender: 'Male',
        birthday: new Date('08/01/1991').toISOString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        role_id: 1
      },
      {
        username: 'test',
        password: 'test',
        email: 'test2@gmail.com',
        firstname: 'Marlon',
        lastname: 'Parra',
        gender: 'Male',
        birthday: new Date('08/01/1995').toISOString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        role_id: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*+
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   
   await queryInterface.bulkDelete('Users', null, {});
   return await queryInterface.bulkDelete('Roles', null, {});
  }
};
