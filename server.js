require('dotenv').config()

//const { Router } = require('express')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Router = require('./router/sampledbs.js')
mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('connected to database'))

app.use(express.json())

// const sampledbRouter = require('./controller/sampledb.js')
app.use ('/sampledb', Router)
app.listen(3000,() => console.log('server started'))