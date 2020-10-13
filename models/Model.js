const pool = require('../auth/auth')
const fs = require('fs')
const Teacher = require('./Teacher')
const Student = require('./Student')
const Subject = require('./Subject')
const { ESRCH } = require('constants')

class Model {
    // Tampilkan semua Teachers
    static viewAllTeachers(callback) {
        const query = `SELECT * FROM "Teachers"`

        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                const allTeachers = res.rows.map( element => {
                    return new Teacher(element)
                })
                callback(null, allTeachers)
            }
        })
    }

    // Cari Teacher berdasarkan ID
    static findTeacherById(id, callback) {
        const query = `SELECT * FROM "Teachers" WHERE "id" = ${id}`

        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                if (res.rows.length !== 0) {
                    const found = new Teacher(res.rows[0])
                    callback(null, found)
                } else {
                    callback(null, null)
                }
            }
        })
    }

    // Tampilkan semua Students
    static viewAllStudents(callback) {
        pool.query(`SELECT * FROM "Students" ORDER BY "id"`, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                const allStudents = res.rows.map( element => {
                    return new Student(element)
                })
                callback(null, allStudents)
            }
        })
    }

    // Cari Students berdasarkan email
    static findStudentByEmail(email, callback) {
        const query = `SELECT * FROM "Students" WHERE "email" = '${email}'`
        
        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                const found = new Student(res.rows[0])
                callback(null, found)
            }
        })
    }

    // Tambah Student
    static addStudent(newStudent, callback) {
        const query = `INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ($1, $2, $3, $4, $5)`
        const values = [newStudent.first_name, newStudent.last_name, newStudent.email, newStudent.gender, newStudent.birth_date]
        
        pool.query(query, values, (err, res) => {
        if (err) {
                callback(err, null)
            } else {
                callback(null, null) // No Instance
            }
        })
    }

    // Edit Student
    static editStudent(id, callback) {
        const query = `SELECT * FROM "Students" WHERE "id" = ${id}`
        
        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                if (res.rows.length !== 0) {
                    callback(null, res.rows[0])
                } else {
                    callback(null, null)
                }
            }
        })
    }

    // Save Edited Student
    static saveEditedStudent(obj, id, callback) {
        const query = `UPDATE "Students" SET "first_name" = $1, "last_name" = $2, "email" = $3, "gender" = $4, "birth_date" = $5 WHERE "id" = ${id.id}`
        const values = [obj.first_name, obj.last_name, obj.email, obj.gender, obj.birth_date]
        
        pool.query(query, values, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, null) // No Instance
            }
        })
    }

    // Delete Student
    static deleteStudent(id, cb) {
        const query = `DELETE FROM "Students" WHERE "id" = ${id}`
        
        pool.query(query, (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, null) // No Instance
            }
        })
    }

    // Tampilkan semua Subjects
    static viewAllSubjects(callback) {
        const query = `SELECT * FROM "Subjects"`

        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                const allSubjects = res.rows.map( element => {
                    return new Subject(element)
                })
                console.log(allSubjects);
                callback(null, allSubjects)
            }
        })
    }

    // Cari Subject berdasarkan ID
    static findSubjectById(id, callback) {
        const query = `SELECT * FROM "Subjects" WHERE "id" = ${id}`

        pool.query(query, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res.rows[0])
            }
        })
    }
}

module.exports = Model