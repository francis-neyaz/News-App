const express = require("express");
const { getNews, getSources } = require("../controllers/newsController");

const router = express.Router();

router.get("/", getNews);        // Fetch news articles
router.get("/sources", getSources); // Fetch available sources (optional)

module.exports = router;
