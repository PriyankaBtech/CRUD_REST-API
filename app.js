require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/db.js')

const app = express()

// init connection to DB
connectToDB()

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/home', (req, res) => {
    res.send("Home")
})

app.get('/about', (req, res) => {
    res.send("About")
})

module.exports = app