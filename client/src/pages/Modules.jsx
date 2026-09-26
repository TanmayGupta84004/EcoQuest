import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import { modules } from "../data/staticData";
import { fetchWithAuth } from "../services/api";
import "./Modules.css";

function Modules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(modules.map((m) => m.category))];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      try {
        const response = await fetchWithAuth("/dashboard");

        if (!response.ok) {
          throw new Error("Failed to fetch progress");
        }

        const data = await response.json();

        setProgressData(data.progress || []);
      } catch (error) {
        console.error("Progress fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const getModuleProgress = (moduleId) => {
    const moduleProgress = progressData.find(
      (item) => item.moduleId === moduleId
    );

    return moduleProgress ? moduleProgress.progress : 0;
  };

  const filteredModules = modules.filter((module) => {
    const matchesSearch = module.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      module.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main className="modules-page page-wrapper">
        <div className="container">

          {/* =========================
              HEADER
          ========================== */}

          <section className="modules-header">

            <h1>
              Learning Modules
            </h1>

            <p>
              Explore our comprehensive curriculum designed to build your
              environmental knowledge.
            </p>

          </section>


          {/* =========================
              FILTERS
          ========================== */}

          <section className="modules-filters">

            <div className="search-bar">

              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>


            <div className="category-tags">

              {categories.map((cat) => (

                <button
                  key={cat}
                  className={`category-tag ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>

              ))}

            </div>

          </section>


          {/* =========================
              MODULES GRID
          ========================== */}

          <section className="modules-grid">

            {filteredModules.map((module) => {

              const progress = getModuleProgress(module.id);

              return (

                <div
                  key={module.id}
                  className="module-card"
                >

                  <div className="module-card-image">
                    {module.image}
                  </div>


                  <div className="module-card-content">


                    {/* BADGES */}

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


                    {/* TITLE */}

                    <h2>
                      {module.title}
                    </h2>


                    {/* DESCRIPTION */}

                    <p>
                      {module.description}
                    </p>


                    {/* META */}

                    <div className="module-meta">

                      <span>
                        📚 {module.lessons} lessons
                      </span>

                      <span>
                        ⏱️ {module.duration}
                      </span>

                    </div>


                    {/* PROGRESS */}

                    <div className="module-progress">

                      <div className="progress-info">
  <span>Progress</span>
</div>


                      <ProgressBar
                        value={loading ? 0 : progress}
                      />

                    </div>


                    {/* BUTTON */}

                    <Link
                      to={`/modules/${module.id}`}
                      className="btn-primary continue-btn"
                    >
                      {progress > 0
                        ? "Continue Learning"
                        : "Start Module"}
                    </Link>

                  </div>

                </div>

              );

            })}


            {/* NO RESULTS */}

            {filteredModules.length === 0 && (

              <div className="no-results">

                <p>
                  No modules found matching your search.
                </p>

              </div>

            )}

          </section>

        </div>
      </main>
    </>
  );
}

export default Modules;
