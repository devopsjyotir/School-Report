const Router = require("express").Router();
const controller = require("../controllers/StudentsCoursesGradesController");

Router.get("/", controller.GetAllRelations);

module.exports = Router;
