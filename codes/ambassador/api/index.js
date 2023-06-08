'use strict'

const express = require('express')
const cors = require('cors')
const os = require('os')

const api = express()

api.use(express.json())
api.use(cors())

api.get('/user/me', (req, res) => {
  res.send(`/user/me says: hello from : ${os.hostname()}`)
})

api.get('/user/id/:id', (req, res) => {
  res.send(`/user/me/${req.params.id} says: hello from : ${os.hostname()} with ${req.params.id}`)
})

api.listen(8080, () => {
  console.log("API service is running on port 8080")
})
