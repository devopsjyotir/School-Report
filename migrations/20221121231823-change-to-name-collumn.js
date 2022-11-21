'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('students', 'userName', "name")
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('students', 'name', "userName")
  }
};
