const express = require('express')
const {getAllCars, postCar, updateCar,getActiveCars} = require('./carController')
const routeCar = express.Router()



routeCar.route('/').post(postCar).get(getActiveCars)
routeCar.route('/:id').patch(updateCar)





module.exports = routeCar