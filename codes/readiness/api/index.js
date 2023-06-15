const mongoose = require('mongoose')
const express  = require('express')
const cors     = require('cors')
const fs       = require('fs')
const path     = require('path')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/healthcheck', (req, res) => {
  res.send('OK')
})

console.log(`The Application will be ready to accept requests in ${60 * 1000} miliseconds`)
setTimeout(() => {
  api.listen(8080, () => {
    console.log("Application running up on port ", 8080)
  })  
}, 60 * 1000);
