const Model = require('../Models/Model')

class Controller {
    // GET /teachers
    static getAllTeachers(req, res) {
        Model.viewAllTeachers( (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.render('teacher/teachers', { data })
            }
        })
    }

    // GET /teachers/:id
    static getTeacherById(req, res) {
        Model.findTeacherById(+req.params.id, (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else if (!data) {
                res.render('404')
            } else {
                res.render('teacher/findTeacher', { data })
            }
        })
    }

    // GET /students
    static getAllStudents(req, res) {
        Model.viewAllStudents( (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.render('student/students', { data })
            }
        })
    }

    // GET /students/add
    static getStudentAddForm(req, res) {
        const payload = {
            header: 'Add Students Data'
        }
        res.render('student/studentAdd', payload)
    }

    // POST /students/add
    static postStudentAddForm(req, res) {
        Model.addStudent(req.body, err => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.redirect('/students')
            }
        })
    }

    // GET /students/:id/edit
    static getEditStudentForm(req, res) {
        Model.editStudent(+req.params.id, (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else if (!data) {
                res.render('404')
            } else {
                const payload = {
                    header: 'Add Students Data',
                    data
                }
                res.render('student/studentEdit', payload)
            }
        })
    }

    // POST /students/:id/edit
    static postEditStudentForm(req, res) {
        Model.saveEditedStudent(req.body, req.params, err => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.redirect('/students')
            }
        })
    }

    // GET /students/:id/delete
    static getDeteleStudentById(req, res) {
        Model.deleteStudent(+req.params.id, err => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.redirect('/students')
            }
        })
    }

    // GET /students/:email
    static getStudentByEmail(req, res) {
        Model.findStudentByEmail(req.params.email, (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else if (!data) {
                res.render('404')
            } else {
                res.render('student/findStudent', { data })
            }
        })
    }

    // GET /subjects
    static getAllSubjects(req, res) {
        Model.viewAllSubjects( (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else {
                res.render('subject/subjects', { data })
            }
        })
    }

    // GET /subjects/:id
    static getSubjectById(req, res) {
        Model.findSubjectById(+req.params.id, (err, data) => {
            if (err) {
                res.render('showError', { err })
            } else if (!data) {
                res.render('404')
            } else {
                res.render('subject/findSubject', { data })
            }
        })
    }
}

module.exports = Controller