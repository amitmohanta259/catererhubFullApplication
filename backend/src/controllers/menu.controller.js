import { MenuModel } from "../models/menu.model.js";
// CommonJS version
import { asyncHandler } from "../../utils/http.js";


export const createMenuItem = asyncHandler(async (req, res) => {
  const created = await MenuModel.create(req.body);
  res.json(created);
});

export const getMenuItems = asyncHandler(async (_req, res) => {
  const rows = await MenuModel.all();
  res.json(rows);
});
