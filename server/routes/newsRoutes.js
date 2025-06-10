import express from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
};

// Route to fetch news from NewsAPI.org
router.get('/news', authenticateToken, async (req, res) => {
  try {
    const { q, country, category, page = 1, pageSize = 20 } = req.query;
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: NEWS_API_KEY,
        q,
        country: country || 'us',
        category: category || 'general',
        page,
        pageSize,
      },
    });

    res.json({
      success: true,
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    console.error('News API error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch news' });
  }
});

export default router;


