'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const studentcoursegrade = [...Array(20)].map((_) => {
      return {
     
        courseId: falso.randNumber({min:1,max:20}),
        gradeId: falso.randNumber({min:1,max:5}),
        studentId: falso.randNumber({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('studentsCoursesGrades',studentcoursegrade)
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.bulkDelete('studentsCoursesGrades');
  }
};
