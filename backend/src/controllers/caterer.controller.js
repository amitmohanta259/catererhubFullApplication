import { CatererService } from "../services/catererService.js";

export const getAllCaterers = async (req, res) => {
  try {
    const caterers = await CatererService.getAllCaterers();
    res.json(caterers);
  } catch (err) {
    console.error("Error fetching caterers:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCaterer = async (req, res) => {
  try {
    const newCaterer = await CatererService.createCaterer(req.body);
    res.status(201).json(newCaterer);
  } catch (error) {
    console.error("Error creating caterer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
