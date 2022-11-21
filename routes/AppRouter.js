const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CoursesRouter = require('./CoursesRouter')
const GradeRouter = require('./GradesRouter')
Router.use('/', AuthRouter)
// Router.use('/course', CoursesRouter)
// Router.use('/students', GradeRouter)
module.exports = Router