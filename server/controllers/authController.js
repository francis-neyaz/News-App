const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists, please login.',
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: 'Signup successful',
      success: true,
      user: { name, email },
    });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found, please sign up first.',
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid password',
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful',
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

module.exports = { signup, login };

