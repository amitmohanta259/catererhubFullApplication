import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import catererRoutes from "./src/routes/caterer.routes.js";
import customerRoutes from "./src/routes/customer.routes.js";
import menuRoutes from "./src/routes/menu.routes.js";
import orderRoutes from "./src/routes/order.routes.js";

dotenv.config();

const app = express();

// ---------------------- CORS ----------------------
const allowedOrigins = ["http://localhost:5173"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman/curl
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

// Handle preflight
app.options("*", cors());
// --------------------------------------------------

// Parse JSON bodies
app.use(express.json());

// ---------------------- Routes --------------------
app.use("/api/caterers", catererRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/orders", orderRoutes);
// --------------------------------------------------

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
