import connectDB from "../config/db";
import Food from "../models/foodModel";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const foods = await Food.find();
    return res.status(200).json(foods);
  }

  if (req.method === "POST") {
    const newFood = await Food.create(req.body);
    return res.status(201).json(newFood);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    await Food.findByIdAndDelete(id);
    return res.status(200).json({ message: "Deleted" });
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const updated = await Food.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updated);
  }

  return res.status(405).end();
}