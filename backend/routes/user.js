const express = require('express')

// controller functions
const { loginUser, signupUser, send } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// send email

router.post('/send-email',send)
module.exports = router