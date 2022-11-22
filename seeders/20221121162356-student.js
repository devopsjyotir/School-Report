'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const students = [...Array(5)].map((_) => {
      return {
        name: falso.randFirstName(),
        email: falso.randEmail(),
        averageGrade: falso.randNumber({min:0,max:4}),
        createdAt: new Date(),
        updatedAt: new Date(),
    
      }
    })
    await queryInterface.bulkInsert('students', students)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students');
  }
};
