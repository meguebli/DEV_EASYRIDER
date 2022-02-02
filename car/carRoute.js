const express = require('express')
const router = express.Router()
const  {getAllCars, getCarByCategorie }= require('../car/carController')

router.get('/cars',getAllCars)
// router.route('/cars').get(getAllCars).
//router.route('/cars').get(getAllCars)
router.get('/cars/:Categorie',getCarByCategorie)



module.exports = router