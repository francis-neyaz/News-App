const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/dotenv");
const newsRoutes = require("./routes/newsRoutes");
const errorHandler = require("./middlewares/errorHandler");
const bodyParser =require('body-parser');
const AuthRouter = require('./routes/AuthRouter');
require('./Models/db');
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', AuthRouter);

app.get("/get", (req, res)=>{
res.json({message:"Hello world"});
});


// Routes
app.use('/auth',AuthRouter );
app.use("/news", newsRoutes);


// Error Handling Middleware
app.use(errorHandler);



// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



