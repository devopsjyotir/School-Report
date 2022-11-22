const { StudentsCoursesGrades } = require("../models");

const GetAllRelations = async (req, res) => {
  try {
    const relations = await StudentsCoursesGrades.findAll();
    res.send(relations);
  } catch (error) {
    throw error;
  }
};

const CreateRelations = async (req, res) => {
  try {
    const newRelation = await StudentsCoursesGrades.create(req.body);
    res.send(newRelation);
  } catch (error) {
    throw error;
  }
};
// provided studentId & courseId & gradeId -> Create new StudentsCoursesGrades with value for studentId & courseId & gradeId populated
// provided studentId & courseId -> Create new StudentsCoursesGrades with value for studentId & courseId populated

module.exports = {
  GetAllRelations,
  CreateRelations
};
