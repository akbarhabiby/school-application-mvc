const pool = require('./auth/auth')
const fs = require('fs')
const Teacher = require('./models/Teacher')
const Student = require('./models/Student')
const Subject = require('./models/Subject')

fs.readFile('./json/teachers.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data = JSON.parse(data)
        const teachersInstance = data.map( element => {
            return new Teacher(element)
        })
        const query = `INSERT INTO "Teachers" ("first_name", "last_name", "email", "gender") VALUES ($1, $2, $3, $4)`
        teachersInstance.forEach( (element, index) => {
            const value = [element.first_name, element.last_name, element.email, element.gender]
            pool.query(query, value, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Berhasilkan menambahkan Teachers ke ${index}`);
                }
            })
        })
    }
})

fs.readFile('./json/students.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data = JSON.parse(data)
        const studentsInstance = data.map( element => {
            return new Student(element)
        })
        const query = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ($1, $2, $3, $4, $5)`
        studentsInstance.forEach( (element, index) => {
            const value = [element.first_name, element.last_name, element.email, element.gender, element.birth_date]
            pool.query(query, value, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Berhasilkan menambahkan Students ke ${index}`);
                }
            })
        })
    }
})

fs.readFile('./json/subjects.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data = JSON.parse(data)
        const subjectsInstance = data.map( element => {
            return new Subject(element)
        })
        const query = `INSERT INTO "Subjects" ("subject_name") VALUES ($1)`
        subjectsInstance.forEach( (element, index) => {
            const value = [element.subject_name]
            pool.query(query, value, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Berhasilkan menambahkan Subjects ke ${index}`);
                }
            })
        })
    }
})