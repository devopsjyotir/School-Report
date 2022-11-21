const {Student, Course}= require('../models')
const course = require('../models/course')

const GetAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll()
        res.send(courses)
    } catch (error) {
        throw error
    } 
}

const GetCourseDetails = async (req, res) => {
  try {
      const courses = await Course.findByPk(req.params.course_id)
      res.send(course)
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



const CreateCourse = async (req, res) => {
  try {
    let student_id=parseInt(req.params.student_id)
    let courseBody={
      owner_id,
      ...req.body
    }
      const newCourse = await Course.create(courseBody)
      res.send(newCourse)
  } catch (error) {
      throw error
  } 
}


const UpdateCourse = async (req, res) => {
  try {
    let courseId=parseInt(req.params.course_id)
    let updatedCourse=await Course.update(req.body,{
      where:{id:courseId},
      returning:true
    })
    res.send(updatedCourse)
  } catch (error) {
      throw error
  } 
}

const DeleteCourse = async (req, res) => {
  try {
    let courseId=parseInt(req.params.course_id)
    await Course.destroy({where:{id:courseId}})
      res.send({message:`Deleted Course with id of ${courseId}`})
  } catch (error) {
      throw error
  } 
}

module.exports = {
    GetAllCourses,
    GetCourseDetails,
    GetStudentCourses,
    CreateCourse,
    UpdateCourse,
    DeleteCourse
}