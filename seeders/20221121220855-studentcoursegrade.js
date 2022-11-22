"use strict";
const falso = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const studentcoursegrade = [...Array(15)].map((_) => {
      return {
        courseId: falso.randNumber({ min: 1, max: 5 }),
        gradeId: falso.randNumber({ min: 1, max: 5 }),
        studentId: falso.randNumber({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    await queryInterface.bulkInsert(
      "studentscoursesgrades",
      studentcoursegrade
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("studentscoursesgrades");
  }
};
