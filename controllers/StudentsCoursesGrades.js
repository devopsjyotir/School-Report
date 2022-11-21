const { Student,Course, Grade } = require('../models')


const GetAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.send(students)
    } catch (error) {
        throw error
    } 
}

const GetStudentDetails = async (req, res) => {
  try {
      const students = await Student.findByPk(req.params.student_id)
      res.send(students)
  } catch (error) {
      throw error
  } 
}

const GetAllGrades = async (req, res) => {
    try {
        const grades = await Grade.findAll()
        res.send(grades)
    } catch (error) {
        throw error
    }
  }
  const GetAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll()
        res.send(courses)
    } catch (error) {
        throw error
    } 
}

const GetStudentCourses=async(req,res)=>{
    try {
      let studentId= parseInt(req.params.student_id);
      const courses = await Course.findAll({where:{student_id:studentId}})
      res.send(courses)
    } catch (error) {
      throw error
    } 
    }

    module.exports = {
        GetAllStudents,
        GetStudentDetails,
        GetStudentCourses,
        GetAllGrades,
        GetAllCourses
    }