const Router = require('express').Router()
const controller = require('../controllers/CoursesController')


Router.get('/',controller.GetAllCourses)
Router.get('/:course_id',controller.GetCourseDetails)
Router.get('/courses/:student_id',controller.GetStudentCourses)
Router.post('/create/:student_id',controller.CreateCourse)
Router.put('/:course_id',controller.UpdateCourse)
Router.delete('/:course_id',controller.DeleteCourse)

module.exports = Router
