// Require from express
const route = require('express').Router()

// Get Controller
const Controller = require('../../controllers/controller-app')

// Routing
route.get('/', Controller.getAllSubjects) // GET /subjects

route.get('/:id', Controller.getSubjectById) // GET /subjects/:id

module.exports = route