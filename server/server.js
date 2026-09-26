import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from "./routes/auth.js";
import progressRoutes from "./routes/progress.js";
import dashboardRoutes from "./routes/dashboard.js";
import leaderboardRoutes from "./routes/leaderboard.js";

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "EcoQuest Backend Running"
  });
});

// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});