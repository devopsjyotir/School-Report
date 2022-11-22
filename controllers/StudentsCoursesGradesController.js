const { StudentsCoursesGrades, Course, Student, Grade } = require("../models");

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

const GetStudentRelations = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id);
    const studentRelation = await StudentsCoursesGrades.findAll({
      where: {
        studentId: studentId
      },
      attributes: ["studentId", "courseId", "gradeId"]
    });

    res.send(studentRelation);
  } catch (error) {
    throw error;
  }
};

const GetStudentCourseRelations = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id);
    let courseId = parseInt(req.params.course_id);
    const studentRelation = await StudentsCoursesGrades.findAll({
      where: {
        studentId: studentId,
        courseId: courseId
      },
      attributes: ["studentId", "courseId", "gradeId"]
    });

    res.send(studentRelation);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllRelations,
  CreateRelations,
  GetStudentRelations,
  GetStudentCourseRelations
};
