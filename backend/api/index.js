const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const foodRoutes = require("../routes/foodRoutes");
const connectDB = require("../config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("API jalan nich");
});

app.use("/api/foods", foodRoutes);

connectDB();

module.exports = serverless(app);