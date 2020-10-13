// Require from express
const route = require('express').Router()

// Get Controller
const Controller = require('../../controllers/controller-app')

// Routing
route.get('/', Controller.getAllStudents) // GET /students

route.get('/add', Controller.getStudentAddForm) // GET /students/add

route.post('/add', Controller.postStudentAddForm) // POST /students/add

route.get('/:id/edit', Controller.getEditStudentForm) // GET /students/:id/edit

route.post('/:id/edit', Controller.postEditStudentForm) // POST /students/:id/edit

route.get('/:id/delete', Controller.getDeteleStudentById) // GET /students/:id/delete

route.get('/:email', Controller.getStudentByEmail) // GET /students/:email

module.exports = route