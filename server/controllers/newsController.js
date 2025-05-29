const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.NEWS_API_KEY;

const getNews = async (req, res) => {
  try {
    const { category = 'technology', country = 'us' } = req.query;
    const response = await axios.get(`https://newsdata.io/api/1/news`, {
      params: {
        apikey: API_KEY,
        country,
        category,
        language: 'en'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

module.exports = { getNews };
