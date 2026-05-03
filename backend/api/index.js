const express = require("express");
const cors = require("cors");
const foodRoutes = require("../backend/routes/foodRoutes");
const connectDB = require("../backend/config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("API jalan nich");
});

const serverless = require("serverless-http");

module.exports = async (req, res) => {
  await connectDB();
  return serverless(app)(req, res);
};