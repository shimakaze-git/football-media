import bodyParser from "body-parser"

const express = require("express")
const app = express()

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/hello", function(req, res) {
  // console.log("req", req.url)
  // console.log('req.originalUrl', req.originalUrl)
  res.send("HelloWorld")
})

module.exports = app
