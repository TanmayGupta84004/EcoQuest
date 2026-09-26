import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🌱 Learn. Play. Make a Difference.</span>

          <h1>
            Learn Sustainability
            <br />
            <span>in a Fun Way</span>
          </h1>

          <p>
            EcoQuest is a gamified learning platform that helps you understand
            environmental concepts through interactive modules, quizzes, and
            challenges.
          </p>

          <div className="hero-buttons">
            <Link to="/modules" className="primary-btn">
              Start Learning
            </Link>

            <Link to="/quiz/1" className="secondary-btn">
              Take a Quiz
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-visual-card">
            <img
              src="/images/earth.png"
              alt="Earth"
              className="earth-img"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-heading">
          <h2>Why Choose EcoQuest?</h2>
          <p>
            Learn about our planet through an engaging and interactive
            experience.
          </p>
        </div>

        <div className="feature-cards">
          <div className="card">
            <div className="card-icon">📚</div>

            <h3>Interactive Learning</h3>

            <p>
              Explore environmental topics through simple and engaging
              learning modules.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🧠</div>

            <h3>Quizzes & Challenges</h3>

            <p>
              Test your knowledge with quizzes and challenges after completing
              each learning module.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🏆</div>

            <h3>Rewards & Leaderboard</h3>

            <p>
              Earn XP, unlock achievements, and track your progress on the
              leaderboard.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Preview */}
      <section className="learning-preview">
        <div className="learning-preview-content">
          <div className="learning-text">
            <h2>Learn. Complete. Progress.</h2>

            <p>
              EcoQuest turns environmental learning into a simple journey.
              Complete modules, take quizzes, earn XP, and keep improving your
              knowledge.
            </p>

            <ul className="learning-list">
              <li>Explore environmental topics</li>
              <li>Complete interactive quizzes</li>
              <li>Earn XP and achievements</li>
              <li>Track your learning progress</li>
            </ul>
          </div>

          <div className="learning-card">
            <h3>Your Learning Progress</h3>

            <div className="learning-progress">
              <div className="progress-info">
                <span>Climate Change</span>
                <span>72%</span>
              </div>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="learning-progress">
              <div className="progress-info">
                <span>Renewable Energy</span>
                <span>45%</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="learning-progress">
              <div className="progress-info">
                <span>Waste Management</span>
                <span>30%</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <h2>Ready to Start Your EcoQuest?</h2>

        <p>
          Begin your sustainability journey and learn something new about our
          planet today.
        </p>

        <Link to="/modules" className="primary-btn">
          Explore Modules
        </Link>
      </section>
    </div>
  );
}

export default Home;