const express = require('express')
const router = express.Router()
const {login,register} = require('./authController')


router.post('/register',register)
router.get('/login/:useremail/:userpass', login)


module.exports = router