const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/dotenv");
const newsRoutes = require("./routes/newsRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/news", newsRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



