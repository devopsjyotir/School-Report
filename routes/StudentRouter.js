const Router = require('express').Router()
const controller = require('../controllers/StudentsController')


Router.get('/',controller.GetAllStudents)
Router.get('/:student_id',controller.GetStudentDetails)
Router.post('/create/:student_id',controller.CreateStudent)
Router.put('/:student_id',controller.UpdateStudent)

module.exports = Router