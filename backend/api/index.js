const express = require("express");
const cors = require("cors");
const foodRoutes = require("../backend/routes/foodRoutes");
const connectDB = require("../backend/config/db");
const serverless = require("serverless-http");

const app = express();

connectDB(); 

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("API jalan nich");
});

module.exports = serverless(app);