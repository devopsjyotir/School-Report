'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const grades = [...Array(20)].map((_) => {
      return {
        userId: falso.randNumber({min:1,max:20}),
        letter: falso.randEmail(),
        score: falso.randNumber({min:0,max:4}),
        createdAt: new Date(),
        updatedAt: new Date(),
  }
})
await queryInterface.bulkInsert('grades', grades)
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('grades')
  }
};
