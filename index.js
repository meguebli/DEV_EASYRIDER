const express = require('express')
const app = express()
const routerDriver = require('./driver/driverRoute')
const routerCar= require('./car/carRoute')
const routerRider = require('./rider/riderRoute')
const routerAuth = require('./user/authRoute')


 
app.use(express.json())
app.use('/', routerAuth) 
app.use('/', routerCar) 
app.use('/', routerDriver) 
app.use('/', routerRider) 
port =  3000

const start = async() => {
    try{
        
        app.listen(port, console.log(`Your server is alive on : http://localhost:${port}`))
    }catch(error){
        console.log(error);
    }
}

start()