'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const studentcoursegrade = [...Array(20)].map((_) => {
      return {
     
        course_id: falso.randNumber({min:1,max:20}),
        grade_id: falso.randNumber({min:1,max:20}),
        student_id: falso.randNumber({min:1,max:20}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('studentcoursegrade',studentcoursegrade)
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.bulkDelete('studentcoursegrade');
  }
};
