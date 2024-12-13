import express from "express";
import authRoutes from "./routes/auth.route.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/v1/auth", authRoutes);
