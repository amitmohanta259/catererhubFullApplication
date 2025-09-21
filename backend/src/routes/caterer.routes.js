import express from "express";
import { getAllCaterers, createCaterer } from "../controllers/caterer.controller.js";

const router = express.Router();

router.get("/", getAllCaterers);
router.post("/", createCaterer);
router.get("/all", getAllCaterers);
export default router;
