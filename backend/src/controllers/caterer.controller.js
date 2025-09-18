// backend/src/controllers/caterer.controller.js
import { Caterer } from "../models/caterer.model.js";

export const getAllCaterers = async (req, res) => {
  try {
    const caterers = await Caterer.getAll();
    res.json(caterers);
  } catch (err) {
    console.error("Error fetching caterers:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCaterer = async (req, res) => {
  try {
    await Caterer.create(req.body);
    res.json({ success: true, message: "Caterer created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



