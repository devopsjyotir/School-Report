const { Student,Course, Grade, studentscoursesgrades } = require('../models')
const studentscoursesgrades = require('../models/studentscoursesgrades')


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
      const courses = await studentscoursesgrades.findAll({where:{studentId:studentId}})
      console.log(courses)
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