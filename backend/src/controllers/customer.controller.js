import { CustomerModel } from "../models/customer.model.js";
import { asyncHandler } from "../../utils/http.js";

export const createCustomer = asyncHandler(async (req, res) => {
  const created = await CustomerModel.create(req.body);
  res.json(created);
});

export const getCustomers = asyncHandler(async (_req, res) => {
  const rows = await CustomerModel.all();
  res.json(rows);
});
