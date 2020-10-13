// Require express as framework and route
const express = require('express')
const route = require('./routes')

// Invoke app and set port
const app = express()
const PORT = 3000

// Set Template engine ("setting", "value")
app.set('view engine', 'ejs')

// Use middleware
app.use(express.urlencoded({ extended: false }))

// Use route (from list route)
app.use(route)

// Start the app
app.listen(PORT, () => {
    console.log(`App running on http://127.0.0.1:${PORT}`);
})