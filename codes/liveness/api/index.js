const TIME = process.env.TIME || 5
const TIME_SERVICE = process.env.TIME_SERVICE || 5
const express  = require('express')
const cors     = require('express')
const mongoose = require('mongoose')
const fs       = require('fs')
const path     = require('path')

const api = express()

api.use(express.json())
api.use(cors())

console.log(`The file will be created in ${TIME} seconds`)
setTimeout(() => {
  fs.writeFileSync(path.join('files', 'config'), "Exec test can run...")
  console.log("The file was created")
}, +TIME * 1000)

api.get('/healthcheck', (req, res) => {
  res.send('OK')
})


console.log(`The server will be started in ${TIME_SERVICE} seconds`)
setTimeout(() => {
  api.listen(8080, async () => {
    try {
      await mongoose.connect('mongodb://root:toor@database-cluster-ip-service:27017/admin');
      console.log('Database connected ...')
    } catch (e) {
      console.log("Database no connected", e.message)
    }
  })
  console.log("The service was started")
}, +TIME_SERVICE * 1000)

