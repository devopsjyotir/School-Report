"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Grade.belongsToMany(models.Student, {
        as: "studentGrade",
        through: models.StudentsCoursesGrades,
        foreignKey: "gradeId"
      });
      Grade.belongsToMany(models.Course, {
        as: "courseGrades",
        through: models.StudentsCoursesGrades,
        foreignKey: "gradeId"
      });
    }
  }
  Grade.init(
    {
      letter: DataTypes.STRING,
      score: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Grade",
      tableName: "grades"
    }
  );
  return Grade;
};
