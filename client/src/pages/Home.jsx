import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

  <div className="hero-content">
    <h1>Learn Sustainability in a Fun Way 🌍</h1>

    <p>
      EcoQuest is a gamified learning platform that helps
      users understand environmental concepts through
      interactive modules and quizzes.
    </p>

    <div className="hero-buttons">
      <button>Start Learning</button>
      <button>Take Quiz</button>
    </div>
  </div>

 <div className="hero-image">
  <img
    src="/images/earth.png"
    alt="Earth"
    className="earth-img"
  />
</div>

</section>

      <section className="features">
  <h2>Why Choose EcoQuest?</h2>

  <div className="feature-cards">
    <div className="card">
      <h3>📚 Interactive Learning</h3>
      <p>
        Learn sustainability concepts through engaging modules
        and real-world examples.
      </p>
    </div>

    <div className="card">
      <h3>🧠 Quizzes & Challenges</h3>
      <p>
        Test your knowledge with quizzes and improve your
        understanding in a fun way.
      </p>
    </div>

    <div className="card">
      <h3>🏆 Rewards & Leaderboard</h3>
      <p>
        Earn points, unlock achievements, and compete with
        other learners.
      </p>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;