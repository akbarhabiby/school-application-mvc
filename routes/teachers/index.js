// Require from express
const route = require('express').Router()

// Get Controller
const Controller = require('../../controllers/controller-app')

// Routing
route.get('/', Controller.getAllTeachers) // GET /teachers

route.get('/:id', Controller.getTeacherById) // GET /teachers/:id

module.exports = route