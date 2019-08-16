'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });

      ref: https://stackoverflow.com/questions/49890998/how-to-add-column-in-sequelize-existing-model
    */
    return Promise.all([
      queryInterface.addColumn('Users', // where do you want to add the foreign key
        'role_id', // column name from target column
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Roles', // target table
            key: 'role_id'  // column name from target column
          }
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    // removes associated column
    return queryInterface.removeColumn(
      'Users',
      'role_id'
    );
  }
};
