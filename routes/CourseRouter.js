const Router = require('express').Router()
const controller = require('../controllers/CoursesController')


Router.get('/',controller.GetAllCourses)
Router.get('/:course_id',controller.GetCourseDetails)
Router.get('/course/:student_id',controller.GetStudentCourses)
Router.post('/',controller.CreateCourse)
Router.put('/:course_id',controller.UpdateCourse)
Router.delete('/:course_id',controller.DeleteCourse)

module.exports = Router
