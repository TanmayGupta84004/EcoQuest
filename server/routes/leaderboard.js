import express from "express";
import User from "../models/User.js";
import Progress from "../models/Progress.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("name");

    const leaderboard = [];

    for (const user of users) {
      const progress = await Progress.find({
        userId: user._id,
      });

      let totalXP = 0;

      progress.forEach((item) => {
        totalXP += item.xpEarned || 0;
      });

      leaderboard.push({
        userId: user._id,
        name: user.name,
        totalXP,
      });
    }

    leaderboard.sort((a, b) => b.totalXP - a.totalXP);

    const rankedLeaderboard = leaderboard.map((user, index) => ({
      rank: index + 1,
      userId: user.userId,
      name: user.name,
      totalXP: user.totalXP,
      level: Math.floor(user.totalXP / 100) + 1,
    }));

    res.json(rankedLeaderboard);
  } catch (error) {
    console.error("Leaderboard error:", error);

    res.status(500).json({
      message: "Server error while loading leaderboard",
    });
  }
});

export default router;