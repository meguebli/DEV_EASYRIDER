const express = require('express')
const {getAllCars, postCar} = require('./carController')
const routeCar = express.Router()



routeCar.route('/').post(postCar).get(getAllCars)





module.exports = routeCar