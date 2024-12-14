import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // parse JSON request body

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

app.use("/api/v1/auth", authRoutes);
