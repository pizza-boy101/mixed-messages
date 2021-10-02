const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static("express"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/mixed-messages.html'))
})

const server = app
const port = 6969

server.listen(port)

console.debug('Server running on port: ' + port)