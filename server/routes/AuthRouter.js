const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');


  
// Signup / login Route
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;
