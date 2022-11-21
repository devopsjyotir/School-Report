'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const grades = [
      {
        letter: "A",
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        letter: "B",
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        letter: "C",
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        letter: "D",
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        letter: "F",
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('grades', grades)
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('grades')
  }
};
