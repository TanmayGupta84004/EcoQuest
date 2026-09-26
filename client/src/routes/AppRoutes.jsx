import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/dashboard";
import Modules from "../pages/Modules";
import ModuleDetails from "../pages/ModuleDetails";
import Quiz from "../pages/Quiz";
import Leaderboard from "../pages/Leaderboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/modules/:id" element={<ModuleDetails />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default AppRoutes;