import express from "express";
import Progress from "../models/Progress.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/quiz", authMiddleware, async (req, res) => {
  console.log("QUIZ ROUTE HIT");

  try {
    const { moduleId, score, totalQuestions } = req.body;

    if (
      moduleId === undefined ||
      score === undefined ||
      totalQuestions === undefined
    ) {
      return res.status(400).json({
        message: "moduleId, score and totalQuestions are required",
      });
    }

    // Find logged-in user
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Calculate XP
    const xpEarned = score * 20;

    // Find existing progress
    let progressDoc = await Progress.findOne({
      userId: req.user.id,
      moduleId,
    });

    if (progressDoc) {
      // Keep higher score
      if (score > progressDoc.score) {
        progressDoc.score = score;
      }

      // Keep higher XP
      if (xpEarned > progressDoc.xpEarned) {
        progressDoc.xpEarned = xpEarned;
      }

      progressDoc.totalQuestions = totalQuestions;
      progressDoc.progress = 100;
      progressDoc.completed = true;
      progressDoc.quizCompleted = true;
      progressDoc.updatedAt = Date.now();
    } else {
      progressDoc = new Progress({
        userId: req.user.id,
        moduleId,
        progress: 100,
        completed: true,
        score,
        totalQuestions,
        xpEarned,
        quizCompleted: true,
      });
    }

    const savedProgress = await progressDoc.save();

    // -----------------------------
    // UPDATE LEARNING STREAK
    // -----------------------------

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!user.lastQuizDate) {
      // First quiz ever
      user.streak = 1;
    } else {
      const lastQuiz = new Date(user.lastQuizDate);
      lastQuiz.setHours(0, 0, 0, 0);

      const differenceInTime = today - lastQuiz;

      const differenceInDays = Math.floor(
        differenceInTime / (1000 * 60 * 60 * 24)
      );

      if (differenceInDays === 1) {
        // Quiz completed on consecutive day
        user.streak += 1;
      } else if (differenceInDays > 1) {
        // Streak broken
        user.streak = 1;
      }

      // If differenceInDays === 0,
      // keep the same streak.
    }

    user.lastQuizDate = new Date();

    await user.save();

    console.log("STREAK UPDATED:", user.streak);

    res.status(200).json({
      message: "Quiz result saved successfully",
      progress: savedProgress,
      streak: user.streak,
    });
  } catch (error) {
    console.error("Progress save error:", error);

    res.status(500).json({
      message: "Server error while saving progress",
    });
  }
});

export default router;