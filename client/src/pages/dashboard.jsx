import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { modules } from "../data/staticData";
import { fetchWithAuth } from "../services/api";
import "./dashboard.css";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const response = await fetchWithAuth("/dashboard");

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard");
        }

        const data = await response.json();

        setDashboard(data);
      } catch (error) {
        console.error("Dashboard fetch error:", error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="dashboard-page">
          <div
            className="dashboard-container"
            style={{
              textAlign: "center",
              padding: "50px",
            }}
          >
            <h2>Loading...</h2>
          </div>
        </main>
      </>
    );
  }

  if (!dashboard) {
    return null;
  }

  const getModuleProgress = (moduleId) => {
    const moduleProgress = dashboard.progress?.find(
      (item) => item.moduleId === moduleId
    );

    return moduleProgress ? moduleProgress.progress : 0;
  };

  // Find the first module that is not completed
  const nextModule = modules.find(
    (module) => getModuleProgress(module.id) < 100
  );

  return (
    <>
      <Navbar />

      <main className="dashboard-page">
        <div className="dashboard-container">

          {/* Dashboard Header */}
          <section className="dashboard-header">

            <div>
              <p className="dashboard-welcome">
                Welcome back 👋
              </p>

              <h1>
                {dashboard.name}'s Dashboard
              </h1>

              <p>
                Keep learning, complete quizzes, and grow your
                environmental knowledge.
              </p>
            </div>

            <div className="level-card">
              <span>Current Level</span>

              <strong>
                Level {dashboard.level}
              </strong>

              <small>
                {dashboard.totalXP} XP
              </small>
            </div>

          </section>


          {/* Dashboard Stats */}
          <section className="dashboard-stats">

            <div className="stat-card">

              <div className="stat-icon">
                ⭐
              </div>

              <div>
                <span>Total XP</span>

                <h2>
                  {dashboard.totalXP}
                </h2>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                🔥
              </div>

              <div>
                <span>Learning Streak</span>

                <h2>
                  {dashboard.streak}{" "}
                  {dashboard.streak === 1 ? "Day" : "Days"}
                </h2>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                📚
              </div>

              <div>
                <span>Modules Completed</span>

                <h2>
                  {dashboard.completedModules}
                </h2>
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                🏆
              </div>

              <div>
                <span>Achievements</span>

                <h2>
                  {dashboard.achievements?.length || 0}
                </h2>
              </div>

            </div>

          </section>


          {/* Dashboard Grid */}
          <section className="dashboard-grid">

            {/* Learning Progress */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h2>
                    Learning Progress
                  </h2>

                  <p>
                    Track your progress across different topics.
                  </p>
                </div>

              </div>


              {modules.map((module) => (

                <div
                  className="progress-item"
                  key={module.id}
                >

                  <div className="progress-info">

                    <span>
                      {module.title}
                    </span>

                    <strong>
                      {getModuleProgress(module.id)}%
                    </strong>

                  </div>


                  <div className="progress-bar">

                    <div
                      className="progress-fill"
                      style={{
                        width: `${getModuleProgress(module.id)}%`,
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>


            {/* Recent Achievements */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h2>
                    Recent Achievements
                  </h2>

                  <p>
                    Your latest milestones.
                  </p>
                </div>

              </div>


              <div className="achievement-list">

                {dashboard.achievements?.length > 0 ? (

                  dashboard.achievements.map((achievement) => (

                    <div
                      className="achievement-item"
                      key={achievement.id}
                    >

                      <div className="achievement-icon">
                        {achievement.icon}
                      </div>

                      <div>

                        <h3>
                          {achievement.title}
                        </h3>

                        <p>
                          {achievement.description}
                        </p>

                      </div>

                    </div>

                  ))

                ) : (

                  <div className="achievement-item">

                    <div className="achievement-icon">
                      🌱
                    </div>

                    <div>

                      <h3>
                        No achievements yet
                      </h3>

                      <p>
                        Complete quizzes and modules to unlock
                        achievements.
                      </p>

                    </div>

                  </div>

                )}

              </div>

            </div>


            {/* Quick Actions */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h2>
                    Quick Actions
                  </h2>

                  <p>
                    Jump right back in.
                  </p>
                </div>

              </div>


              <div className="actions-list">

                {nextModule ? (

                  <Link
                    to={`/modules/${nextModule.id}`}
                    className="btn-primary action-btn"
                  >
                    Continue: {nextModule.title}
                  </Link>

                ) : (

                  <Link
                    to="/modules"
                    className="btn-primary action-btn"
                  >
                    🎉 All Modules Completed
                  </Link>

                )}


                <Link
                  to="/modules"
                  className="btn-secondary action-btn outline"
                >
                  Browse All Modules
                </Link>


                <Link
                  to="/leaderboard"
                  className="btn-secondary action-btn outline"
                >
                  View Leaderboard
                </Link>

              </div>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}

export default Dashboard;
