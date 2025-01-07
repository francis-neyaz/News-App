const axios = require("axios");

// Get news articles
const getNews = async (req, res) => {
  const { category } = req.query; // Query param for filtering
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.NEWS_API_KEY, // Your NewsAPI key
        category: category || "general", // Default category
        country: "us", // Adjust based on your audience
        pageSize: 20, // Number of articles to fetch
      },
    });

    res.status(200).json(response.data.articles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
};

// Get sources (optional: useful for custom filtering)
const getSources = async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines/sources", {
      params: { apiKey: process.env.NEWS_API_KEY },
    });

    res.status(200).json(response.data.sources);
  } catch (error) {
    console.error("Error fetching news sources:", error.message);
    res.status(500).json({ message: "Failed to fetch news sources" });
  }
};

module.exports = { getNews, getSources };
