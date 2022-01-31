// requirements
const express = require('express')
const routeDriver = require('./driverRoute')
const routeCar = require('./carRoute')
const app = express()

// my branch : driverFts_hicham
app.use(express.json())


app.use('/api/v1/driver', routeDriver)
app.use('/api/v1/car', routeCar)
const port = 3000
app.listen(port, () => {
    console.log(`Your server is online on : http://localhost:${port}`)
})
