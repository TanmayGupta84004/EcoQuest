import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <span className="brand-icon">🌱</span>
        <span>EcoQuest</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="navbar-links">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        <Link to="/modules" onClick={closeMenu}>Modules</Link>
        <Link to="/leaderboard" onClick={closeMenu}>Leaderboard</Link>
      </div>

      {/* Desktop Actions */}
      <div className="navbar-actions">
        {token ? (
          <button
            onClick={handleLogout}
            className="login-link"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Login
            </Link>

            <Link to="/signup" className="signup-btn">
              Get Started
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/dashboard" onClick={closeMenu}>
            Dashboard
          </Link>

          <Link to="/modules" onClick={closeMenu}>
            Modules
          </Link>

          <Link to="/leaderboard" onClick={closeMenu}>
            Leaderboard
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="mobile-logout"
            >
              Logout
            </button>
          ) : (
            <div className="mobile-auth-links">
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>

              <Link to="/signup" onClick={closeMenu}>
                Get Started
              </Link>
            </div>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;