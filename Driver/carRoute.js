const express = require('express')
const {getAllCars, postCar, updateCar} = require('./carController')
const routeCar = express.Router()



routeCar.route('/').post(postCar).get(getAllCars)
routeCar.route('/:id').patch(updateCar)





module.exports = routeCar