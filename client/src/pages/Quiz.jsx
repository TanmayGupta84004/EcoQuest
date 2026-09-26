import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { quizzes, modules } from "../data/staticData";
import { fetchWithAuth } from "../services/api";
import "./Quiz.css";

function Quiz() {
  const { id } = useParams();
  const moduleId = parseInt(id);

  const quizData = quizzes[moduleId];
  const module = modules.find((m) => m.id === moduleId);

  const navigate = useNavigate();
  const location = useLocation();

  const [checkingAuth, setCheckingAuth] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: {
          from: location.pathname,
        },
      });

      return;
    }

    setCheckingAuth(false);
  }, [navigate, location.pathname]);

  if (!quizData || !module) {
    return <Navigate to="/modules" />;
  }

  if (checkingAuth) {
    return (
      <>
        <Navbar />

        <main className="quiz-page page-wrapper">
          <div className="container quiz-container">
            <h2 style={{ textAlign: "center", padding: "40px" }}>
              Checking login...
            </h2>
          </div>
        </main>
      </>
    );
  }

  const questions = quizData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const calculateScore = () => {
    let correct = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });

    setScore(correct);
    return correct;
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return;
    }

    const correct = calculateScore();

    setIsFinished(true);

    try {
      await fetchWithAuth("/progress/quiz", {
        method: "POST",
        body: JSON.stringify({
          moduleId,
          score: correct,
          totalQuestions: questions.length,
        }),
      });
    } catch (error) {
      console.error("Failed to save quiz progress:", error);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
  };

  const progressPercentage =
    (currentQuestionIndex / questions.length) * 100;

  return (
    <>
      <Navbar />

      <main className="quiz-page page-wrapper">
        <div className="container quiz-container">

          {!isFinished ? (
            <div className="quiz-card">

              <div className="quiz-header">

                <h1>{quizData.title}</h1>

                <span className="question-counter">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>

              </div>

              <div className="quiz-progress-bar">

                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                ></div>

              </div>

              <div className="question-section">

                <h2>{currentQuestion.question}</h2>

                <div className="options-list">

                  {currentQuestion.options.map((option, index) => (

                    <button
                      key={index}
                      className={`option-btn ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleSelectAnswer(index)}
                    >

                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                    </button>

                  ))}

                </div>

              </div>

              <div className="quiz-footer">

                <button
                  className="btn-secondary"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>

                <button
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={
                    selectedAnswers[currentQuestionIndex] === undefined
                  }
                >
                  {currentQuestionIndex === questions.length - 1
                    ? "Finish Quiz"
                    : "Next"}
                </button>

              </div>

            </div>
          ) : (
            <div className="quiz-results-card">

              <div className="results-icon">
                {score === questions.length
                  ? "🏆"
                  : score >= questions.length / 2
                  ? "👍"
                  : "📚"}
              </div>

              <h2>Quiz Completed!</h2>

              <p>
                You have completed the {quizData.title}
              </p>

              <div className="score-display">

                <div className="score-circle">

                  <span className="score-number">
                    {Math.round((score / questions.length) * 100)}%
                  </span>

                </div>

                <p>
                  You got {score} out of {questions.length} correct.
                </p>

              </div>

              <div className="results-actions">

                <button
                  className="btn-secondary"
                  onClick={resetQuiz}
                >
                  Retry Quiz
                </button>

                <Link
                  to={`/modules/${moduleId}`}
                  className="btn-primary"
                >
                  Back to Module
                </Link>

                <Link
                  to="/modules"
                  className="btn-secondary"
                >
                  All Modules
                </Link>

              </div>

            </div>
          )}

        </div>
      </main>
    </>
  );
}

export default Quiz;
