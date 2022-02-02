const express = require('express')
const router = express.Router()
const  { getAllRider, getWaitingRider ,getRiderByRouad}= require('../rider/riderController')

router.get('/rider',getAllRider)
router.get('/rider/isWaiting',getWaitingRider)
router.get('/rider/byRoad',getRiderByRouad)



module.exports = router