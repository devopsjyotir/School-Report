const { Student }= require('../models')

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



const CreateStudent = async (req, res) => {
  try {
    let student_id=parseInt(req.params.user_id)
    let studentBody={
      student_id,
      ...req.body
    }
      const newStudent = await Student.create(studentBody)
      res.send(newStudent)
  } catch (error) {
      throw error
  } 
}


const UpdateStudent = async (req, res) => {
  try {
    let studentId=parseInt(req.params.student_id)
    let updatedStudent=await Student.update(req.body,{
      where:{id:studentId},
      returning:true
    })
    res.send(updatedStudent)
  } catch (error) {
      throw error
  } 
}

module.exports = {
    GetAllStudents,
    GetStudentDetails,
    CreateStudent,
    UpdateStudent,
}