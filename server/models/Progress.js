import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  moduleId: {
    type: Number,
    required: true,
  },

  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  score: {
    type: Number,
    default: 0,
  },

  totalQuestions: {
    type: Number,
    default: 0,
  },

  xpEarned: {
    type: Number,
    default: 0,
  },

  quizCompleted: {
    type: Boolean,
    default: false,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

progressSchema.index(
  { userId: 1, moduleId: 1 },
  { unique: true }
);

const Progress = mongoose.model("Progress", progressSchema);

export default Progress;

