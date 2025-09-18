import { Router } from "express";
import { createOrder, getOrdersByCustomer, getOrderDetail } from "../controllers/order.controller.js";
const router = Router();

router.post("/", createOrder);
router.get("/customer/:customerId", getOrdersByCustomer);
router.get("/:orderId", getOrderDetail);

export default router;
