import express from "express";
import cors from "cors";
import catererRoutes from "./routes/caterer.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

app.use("/api/caterers", catererRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
