const axios = require("axios");
const { NEWS_API_KEY } = require("../config/dotenv");

const fetchNews = async (req, res) => {
  const { category } = req.params;
  const { q } = req.query; // Support keyword search for Navbar
  const validCategories = ["sports", "technology", "entertainment", "health", "business", "science"];

  // Validate category if provided
  if (category && !validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const params = {
      access_key: NEWS_API_KEY,
      countries: "us",
      languages: "en",
      limit: 20, // Match frontend expectations
    };

    if (category) params.categories = category;
    if (q) params.keywords = q; // Keyword search

    const response = await axios.get("http://api.mediastack.com/v1/news", { params });

    // Map Mediastack response to frontend-compatible format
    const articles = response.data.data.map((item, index) => ({
      id: index, // Add id for Sidebar
      source: { name: item.source || "Unknown" },
      title: item.title || "No title",
      description: item.description || "",
      url: item.url || "#",
      urlToImage: item.image || null,
      publishedAt: item.published_at || new Date().toISOString(),
      icon: getCategoryIcon(category), // Add icon for Sidebar
    }));

    res.json(articles);
  } catch (error) {
    console.error(`Error fetching ${category || 'news'}:`, error.message, error.response?.data);
    res.status(500).json({ error: "Failed to fetch news", details: error.message });
  }
};

// Map categories to icons for Sidebar
const getCategoryIcon = (category) => {
  const icons = {
    sports: "⚽",
    technology: "💻",
    entertainment: "🎬",
    health: "🏥",
    business: "💼",
    science: "🔬",
  };
  return icons[category] || "📰";
};

module.exports = { fetchNews };