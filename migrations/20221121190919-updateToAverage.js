'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('students', 'averageGrade', {
      type: Sequelize.INTEGER
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('students', 'averageGrade')
  }
};
