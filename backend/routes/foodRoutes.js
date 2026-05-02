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
router.get("/", getFoods);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);
router.get("/summary", getSummary);

module.exports = router;