require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NEWS_API_KEY: process.env.NEWS_API_KEY,
};

