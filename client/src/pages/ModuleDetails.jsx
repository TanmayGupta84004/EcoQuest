import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import { modules } from "../data/staticData";
import { fetchWithAuth } from "../services/api";
import "./ModuleDetails.css";

function ModuleDetails() {
  const { id } = useParams();
  const module = modules.find((m) => m.id === parseInt(id));

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetchWithAuth("/dashboard");

        if (!response.ok) {
          throw new Error("Failed to fetch progress");
        }

        const data = await response.json();

        const moduleProgress = data.progress?.find(
          (item) => item.moduleId === parseInt(id)
        );

        setProgress(moduleProgress ? moduleProgress.progress : 0);
      } catch (error) {
        console.error("Module progress fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [id]);

  if (!module) {
    return <Navigate to="/modules" />;
  }

  return (
    <>
      <Navbar />

      <main className="module-details-page page-wrapper">
        <div className="container">

          <Link to="/modules" className="back-link">
            ← Back to Modules
          </Link>

          <div className="module-header">

            <div className="module-icon-large">
              {module.image}
            </div>

            <div className="module-header-info">

              <div className="module-badges">

                <span className="badge category">
                  {module.category}
                </span>

                <span
                  className={`badge difficulty ${module.difficulty.toLowerCase()}`}
                >
                  {module.difficulty}
                </span>

              </div>

              <h1>{module.title}</h1>

              <p className="module-description">
                {module.description}
              </p>

              <div className="module-stats">

                <div className="stat">
                  <span className="stat-label">
                    Duration
                  </span>

                  <span className="stat-value">
                    ⏱️ {module.duration}
                  </span>
                </div>

                <div className="stat">
                  <span className="stat-label">
                    Lessons
                  </span>

                  <span className="stat-value">
                    📚 {module.lessons} Modules
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="module-content-grid">

            <div className="module-main-content">

              <section className="content-section">
                <h2>Overview</h2>
                <p>{module.content.overview}</p>
              </section>

              <section className="content-section">

                <h2>Key Concepts</h2>

                <ul className="key-concepts-list">

                  {module.content.keyConcepts.map(
                    (concept, index) => (
                      <li key={index}>
                        <span className="check-icon">
                          ✓
                        </span>

                        {concept}
                      </li>
                    )
                  )}

                </ul>

              </section>

              <section className="content-section">

                <h2>Summary</h2>

                <p>
                  {module.content.summary}
                </p>

              </section>

            </div>

            <div className="module-sidebar">

              <div className="progress-card">

                <h3>Your Progress</h3>

                <div className="progress-info">

                  <span>
                    {loading
                      ? "Loading..."
                      : `${progress}% Completed`}
                  </span>

                </div>

                <ProgressBar
                  value={loading ? 0 : progress}
                />

                <div className="action-buttons">

                  <Link
                    to={`/quiz/${module.id}`}
                    className="btn-primary start-quiz-btn"
                  >
                    {progress === 100
                      ? "Retake Quiz"
                      : "Take Quiz to Complete"}
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default ModuleDetails;

