const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { makeArray } = require('./utils')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/makeArray', makeArray)

const PORT = 8080

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
