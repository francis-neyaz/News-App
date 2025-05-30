import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { User } from './models/User.js';
import newsRoutes from './routes/newsRoutes.js';
import Joi from 'joi';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

console.log('MONGO_URI:', MONGO_URI);
console.log('PORT:', PORT);
console.log('JWT_SECRET:', JWT_SECRET);

connectDB();

const app = express();

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// CORS configuration
const allowedOrigins = ['https://localhost:5173', 'https://localhost:5174'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json());

// Validation middleware
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
  next();
};

// Register route
app.post('/api/auth/signup', signupValidation, async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({ success: true, message: 'Registered successfully', token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login route
app.post('/api/auth/login', loginValidation, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// News routes
app.use('/api', newsRoutes);

// Protected route
app.post('/api/predict', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'No token provided' });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    const { age, income } = req.body;
    const prediction = Math.random() > 0.5 ? 'High-Value' : 'Low-Value';
    res.json({ success: true, prediction });
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));