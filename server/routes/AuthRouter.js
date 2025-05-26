const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');

// ✅ Routes match /api/auth/signup and /api/auth/login
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;

