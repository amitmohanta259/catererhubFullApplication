import { Router } from "express";
import { createMenuItem, getMenuItems } from "../controllers/menu.controller.js";
const router = Router();

router.post("/", createMenuItem);
router.get("/", getMenuItems);

export default router;
