const express  = require('express')
const cors     = require('cors')
const fs       = require('fs')
const path     = require('path')
const os       = require('os')

const api = express()

api.use(cors())
api.use(express.json())

console.log(`A file is going to get created in ${60 * 1000} miliseconds`)
setTimeout(() => {
  fs.writeFileSync(path.join('files', 'healthcheck'), "Exec test can run...")
  console.log("The file was created")
}, 60 * 1000)

api.get('/healthcheck', (req, res) => {
  res.send(`OK from ${os.hostname}`)
})

api.listen(8080, () => {
  console.log("Application running up on port ", 8080)
})

