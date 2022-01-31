// requirements
const express = require('express')
const routeDriver = require('./driverRoute')
const app = express()

// my branch : driverFts_hicham
app.use(express.json())


app.use('/api/v1/driver', routeDriver)

const port = 3000
app.listen(port, () => {
    console.log(`Your server is online on : http://localhost:${port}`)
})
