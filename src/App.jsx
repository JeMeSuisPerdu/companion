import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authService } from "./services/authService.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import StudentRegistration from "./pages/registration/StudentRegistration.jsx";
import EcoleRegistration from "./pages/registration/EcoleRegistration.jsx";
import EntrepriseRegistration from "./pages/registration/EntrepriseRegistration.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  // Initialiser l'authentification au démarrage
  useEffect(() => {
    authService.initializeAuth();
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription/etudiant" element={<StudentRegistration />} />
        <Route path="/inscription/ecole" element={<EcoleRegistration />} />
        <Route path="/inscription/entreprise" element={<EntrepriseRegistration />} />

        {/* Routes protégées */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
