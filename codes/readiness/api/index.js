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

api.listen(8080, () => {
  console.log("Application running up on port ", 8080)
})

