class Teacher {
    constructor(teacher) {
        this.id = +teacher.id
        this.first_name = teacher.first_name
        this.last_name = teacher.last_name
        this.email = teacher.email
        this.gender = teacher.gender
    }
}

module.exports = Teacher