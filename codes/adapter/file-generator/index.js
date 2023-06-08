const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const api = express()

api.use(express.json())
api.use(cors())

api.get('/create-file/:name', (req, res) => {
  const fileName = `${new Date().getTime()}-${req.params.name.replaceAll(" ", "_")}`
  const pathFile = path.join('files', `${fileName}`)
  fs.writeFileSync(pathFile, `${req.params.name} - requested at: ${new Date().getTime()}`)
  res.send('File created ...')
})

api.listen(8080, () => {
  console.log("File generator service running on port 8080")
})
