'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentsCoursesGrades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentsCoursesGrades.init({
    studentId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'student',
        key: 'id'
      }
    },
    courseId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'course',
        key: 'id'
      }
    },
    gradeId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'grade',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'StudentsCoursesGrades',
    tableName: 'studentsCoursesGrades'
  });
  return StudentsCoursesGrades;
};