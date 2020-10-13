// Require from express
const route = require('express').Router()

// Require from another routes
const teachers = require('./teachers')
const students = require('./students')
const subjects = require('./subjects')

// Index route (/)
route.get('/', (req, res) => {
    res.render('index')
})

// Teachers route (/teachers)
route.use('/teachers', teachers)

// Students route (/students)
route.use('/students', students)

// Subjects route (/subjects)
route.use('/subjects', subjects)

module.exports = route