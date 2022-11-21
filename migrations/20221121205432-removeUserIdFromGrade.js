'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn('grades', 'userId')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn('grades', 'userId', {
      type: Sequelize.STRING
    })
  }
};
