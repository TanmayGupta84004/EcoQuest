import express from "express";
import User from "../models/User.js";
import Progress from "../models/Progress.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const progress = await Progress.find({
      userId: req.user.id,
    });

    let totalXP = 0;
    let completedModules = 0;
    let sumOfScores = 0;
    let sumOfTotalQuestions = 0;
    let completedQuizzes = 0;

    progress.forEach((p) => {
      totalXP += p.xpEarned || 0;

      if (p.completed) {
        completedModules += 1;
      }

      if (p.quizCompleted) {
        completedQuizzes += 1;
      }

      sumOfScores += p.score || 0;
      sumOfTotalQuestions += p.totalQuestions || 0;
    });

    // Calculate average score
    let averageScore = 0;

    if (sumOfTotalQuestions > 0) {
      averageScore = Math.round(
        (sumOfScores / sumOfTotalQuestions) * 100
      );
    }

    // Calculate level from XP
    let level = Math.floor(totalXP / 100) + 1;

    if (level < 1) {
      level = 1;
    }

    // -----------------------------
    // CALCULATE ACHIEVEMENTS
    // -----------------------------

    const achievements = [];

    // First Step
    if (completedModules >= 1) {
      achievements.push({
        id: "first-step",
        title: "First Step",
        description: "Completed your first module",
        icon: "🌱",
      });
    }

    // Quiz Master
    if (completedQuizzes >= 5) {
      achievements.push({
        id: "quiz-master",
        title: "Quiz Master",
        description: "Completed 5 quizzes",
        icon: "🧠",
      });
    }

    // Week Warrior
    if (user.streak >= 7) {
      achievements.push({
        id: "week-warrior",
        title: "Week Warrior",
        description: "Maintained a 7-day streak",
        icon: "🔥",
      });
    }

    // XP Explorer
    if (totalXP >= 100) {
      achievements.push({
        id: "xp-explorer",
        title: "XP Explorer",
        description: "Earned 100 XP",
        icon: "⭐",
      });
    }

    // Eco Champion
    if (completedModules >= 6) {
      achievements.push({
        id: "eco-champion",
        title: "Eco Champion",
        description: "Completed all 6 modules",
        icon: "🏆",
      });
    }

    res.json({
      name: user.name,
      email: user.email,

      totalXP: totalXP,

      level: level,

      completedModules: completedModules,

      totalModules: 6,

      averageScore: averageScore,

      streak: user.streak || 0,

      completedQuizzes: completedQuizzes,

      achievements: achievements,

      progress: progress,
    });

  } catch (error) {
    console.error("Dashboard error:", error);

    res.status(500).json({
      message: "Server error while loading dashboard",
    });
  }
});

export default router;