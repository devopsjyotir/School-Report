'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Grade, {
        as:'grade',
        through:models.StudentsCoursesGrades,
        foreignKey: 'studentId'
      })
      Student.belongsToMany(models.Course, {
        as:'course',
        through:models.StudentsCoursesGrades,
        foreignKey: 'studentId'
      })
    }
  }
  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    averageGrade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};