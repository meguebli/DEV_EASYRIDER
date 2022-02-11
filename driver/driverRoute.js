const express = require('express')
const router = express.Router()
const  { getAllDrivers, getActiveDriver ,getOnLigneeDriver,getNonActiveDriver}= require('../driver/driverController')


router.get('/driver',getAllDrivers)
router.get('/driver/active',getActiveDriver)
router.get('/driver/nonactive',getNonActiveDriver)
router.get('/driver/online',getOnLigneeDriver)


module.exports = router