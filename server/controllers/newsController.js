const axios = require("axios");
const { NEWS_API_KEY } = require("../config/dotenv");

const fetchNews = async (req, res) => {
  const { category } = req.params;
  const validCategories = ["sports", "technology", "entertainment", "health", "business", "science"];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${NEWS_API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

module.exports = { fetchNews };
