const express = require("express");
const cors = require("cors");

const foodRoutes = require("./routes/foodRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API jalan nich");
});

app.use("/api/foods", foodRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});