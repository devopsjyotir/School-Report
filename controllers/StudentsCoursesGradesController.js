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
    let result = [];
    let studentId = parseInt(req.params.student_id);
    const studentRelation = await Student.findAll({
      where: {
        id: studentId
      },
      attributes: ["id", "name"],
      include: [
        {
          model: Course,
          as: "course",
          attributes: ["id", "name"],
          include: [
            {
              model: Grade,
              as: "courseGrades",
              attributes: ["id"]
            }
          ]
        }
      ]
    });
    // for (let i = 0; i<studentRelation.length;i++){
    //     let tempData = {

    //     }
    // }
    res.send(studentRelation);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllRelations,
  CreateRelations,
  GetStudentRelations
};
