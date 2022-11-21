'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const courses = [...Array(5)].map((_) => {
      return {
        name: falso.randUserName(),
        description: falso.randText({ charCount: 100 }),
        createdAt: new Date(),
        updatedAt: new Date(),
    
      }
    })
    await queryInterface.bulkInsert('courses', courses)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses');
  }
};
