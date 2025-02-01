const express = require("express");
const { fetchNews } = require("../controllers/newsController");

const router = express.Router();

router.get("/:category", fetchNews);

module.exports = router;









