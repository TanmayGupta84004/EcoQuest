import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../services/api";
import "./Leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`${API_URL}/leaderboard`);

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard");
        }

        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Leaderboard fetch error:", error);
        setError("Unable to load leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const topThree = leaderboardData.slice(0, 3);
  const remainingRanks = leaderboardData.slice(3);

  const isCurrentUser = (user) => {
    return currentUser && user.userId === currentUser.id;
  };

  const getAvatar = (name) => {
    return name?.charAt(0).toUpperCase() || "?";
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="leaderboard-page page-wrapper">
          <div className="container">
            <div className="leaderboard-header">
              <h1>Global Leaderboard</h1>
              <p>Loading leaderboard...</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />

        <main className="leaderboard-page page-wrapper">
          <div className="container">
            <div className="leaderboard-header">
              <h1>Global Leaderboard</h1>
              <p>{error}</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="leaderboard-page page-wrapper">
        <div className="container">

          {/* Header */}
          <div className="leaderboard-header">
            <h1>Global Leaderboard</h1>

            <p>
              Compete with other EcoWarriors. Learn more, earn XP, and climb
              the ranks!
            </p>
          </div>

          {/* Top Three */}
          <div className="top-three-section">

            {/* Rank 2 */}
            {topThree[1] && (
              <div
                className={`podium-card silver ${
                  isCurrentUser(topThree[1]) ? "current-user" : ""
                }`}
              >
                <div className="rank-badge">2</div>

                <div className="podium-avatar">
                  {getAvatar(topThree[1].name)}
                </div>

                <h3>
                  {topThree[1].name}{" "}
                  {isCurrentUser(topThree[1]) && "(You)"}
                </h3>

                <div className="podium-stats">
                  <span className="xp-value">
                    {topThree[1].totalXP} XP
                  </span>

                  <span className="level-value">
                    Level {topThree[1].level}
                  </span>
                </div>
              </div>
            )}

            {/* Rank 1 */}
            {topThree[0] && (
              <div
                className={`podium-card gold ${
                  isCurrentUser(topThree[0]) ? "current-user" : ""
                }`}
              >
                <div className="rank-badge">1</div>

                <div className="podium-avatar">
                  {getAvatar(topThree[0].name)}
                </div>

                <h3>
                  {topThree[0].name}{" "}
                  {isCurrentUser(topThree[0]) && "(You)"}
                </h3>

                <div className="podium-stats">
                  <span className="xp-value">
                    {topThree[0].totalXP} XP
                  </span>

                  <span className="level-value">
                    Level {topThree[0].level}
                  </span>
                </div>
              </div>
            )}

            {/* Rank 3 */}
            {topThree[2] && (
              <div
                className={`podium-card bronze ${
                  isCurrentUser(topThree[2]) ? "current-user" : ""
                }`}
              >
                <div className="rank-badge">3</div>

                <div className="podium-avatar">
                  {getAvatar(topThree[2].name)}
                </div>

                <h3>
                  {topThree[2].name}{" "}
                  {isCurrentUser(topThree[2]) && "(You)"}
                </h3>

                <div className="podium-stats">
                  <span className="xp-value">
                    {topThree[2].totalXP} XP
                  </span>

                  <span className="level-value">
                    Level {topThree[2].level}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Remaining Rankings */}
          {remainingRanks.length > 0 && (
            <div className="ranking-table-container">

              <table className="ranking-table">

                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>EcoWarrior</th>
                    <th>Level</th>
                    <th className="text-right">XP</th>
                  </tr>
                </thead>

                <tbody>
                  {remainingRanks.map((user) => (
                    <tr
                      key={user.userId}
                      className={
                        isCurrentUser(user) ? "current-user" : ""
                      }
                    >
                      <td className="rank-cell">
                        {user.rank}
                      </td>

                      <td className="user-cell">
                        <span className="user-avatar">
                          {getAvatar(user.name)}
                        </span>

                        <span className="user-name">
                          {user.name}{" "}
                          {isCurrentUser(user) && "(You)"}
                        </span>
                      </td>

                      <td>
                        Level {user.level}
                      </td>

                      <td className="text-right font-bold">
                        {user.totalXP}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}

          {/* Only One User */}
          {leaderboardData.length === 1 && (
            <div className="ranking-table-container">
              <p
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                You're currently the only EcoWarrior. Invite others to
                compete!
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}

export default Leaderboard;