const express = require('express');
const routeDriver = express.Router();
const {
  getAllDrivers,
  driverStatus,
  createDriver,
} = require('./driverController');

//route for creation + fetching all drivers [exple]
routeDriver.route('/').get(getAllDrivers).post(createDriver)
routeDriver.route('/:id').get(driverStatus);

module.exports = routeDriver
