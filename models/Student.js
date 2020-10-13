class Student {
    constructor(student) {
        this.id = +student.id
        this.first_name = student.first_name
        this.last_name = student.last_name
        this.email = student.email
        this.gender = student.gender
        this.birth_date = student.birth_date
    }
}

module.exports = Student