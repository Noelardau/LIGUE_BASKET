
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const { response } = require('express')
// const { resolve } = require('path')




const app = express()

app.use(express.static("./app"))

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

module.exports = app