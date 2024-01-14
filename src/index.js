const express = require('express')
require('dotenv').config()

// core variables
const app = express()
const port = process.env.PORT || 5000
const router = express.Router()

// ROUTES
const chainsRoute = require('./routes/Chains')

app.use('/chains', chainsRoute)

app.listen(port, () => {
    console.log(`App running on port:::${port}`)
})