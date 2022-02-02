const express = require('express')
const router = express.Router()
const  { getAllDrivers, getActiveDriver }= require('../driver/driverController')


router.get('/driver',getAllDrivers)
router.get('/driver/active',getActiveDriver)



module.exports = router