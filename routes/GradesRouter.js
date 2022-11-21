const Router = require('express').Router()
const controller = require('../controllers/GradesController')

Router.get('/:student_id', controller.GetGrade)
Router.get('/:grade_id', controller.GetGradeDetails)
Router.get('/', controller.GetAllGrades)


module.exports = Router
