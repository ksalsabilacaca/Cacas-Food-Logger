const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/foodController");

const {
  createFood,
  getFoods,
  deleteFood,
  updateFood,
} = require("../controllers/foodController");

router.post("/", createFood);
router.get("/summary", getSummary);
router.get("/", getFoods);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

module.exports = router;