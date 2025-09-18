import { OrderModel } from "../models/order.model.js";
import { asyncHandler } from "../../utils/http.js";

export const createOrder = asyncHandler(async (req, res) => {
  const created = await OrderModel.createWithItems(req.body);
  res.json(created);
});

export const getOrdersByCustomer = asyncHandler(async (req, res) => {
  const rows = await OrderModel.listByCustomer(parseInt(req.params.customerId, 10));
  res.json(rows);
});

export const getOrderDetail = asyncHandler(async (req, res) => {
  const rows = await OrderModel.detail(parseInt(req.params.orderId, 10));
  res.json(rows);
});
