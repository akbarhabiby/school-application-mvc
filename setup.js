const pool = require('./auth/auth')

const teachersTable = `CREATE TABLE "Teachers" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(25) NOT NULL,
    "last_name" VARCHAR(25) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "gender" CHAR(6) NOT NULL
)`

const studentsTable = `CREATE TABLE "Students" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(25) NOT NULL,
    "last_name" VARCHAR(25) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "gender" VARCHAR(6) NOT NULL,
    "birth_date" DATE
)`

const subjectsTable = `CREATE TABLE "Subjects" (
    "id" SERIAL PRIMARY KEY,
    "subject_name" VARCHAR(25)
)`

pool.query(teachersTable, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        pool.query(studentsTable, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                pool.query(subjectsTable, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Proses input semua berhasil');
                        pool.end() // Tutup koneksi
                    }
                })
            }
        })
    }
})