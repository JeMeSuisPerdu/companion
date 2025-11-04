import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import StudentProfile from '../components/profiles/StudentProfile';
import { errorService } from '../services/errorService';
import { api } from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [studentProfile, setStudentProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.role === 'ETUDIANT') {
        setLoading(true);
        setError(null);
        try {
          const response = await api.get(`/etudiants/${user.id}`);
          setStudentProfile(response.data);
        } catch (err) {
          setError(errorService.handleApiError(err));
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="text-center">
          <h1 className="h3 fw-bold text-dark">Non authentifié</h1>
          <p className="text-muted">Veuillez vous connecter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-bottom">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h1 className="h3 fw-bold mb-1">Tableau de bord</h1>
              <p className="text-muted mb-0">Bienvenue, {user.email}</p>
            </div>
            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                {user.role}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-outline-secondary btn-sm px-3"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container py-5">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h2 className="h5 fw-semibold mb-4">Vue d'ensemble</h2>

            {/* Erreur */}
            {error && (
              <div className="alert alert-danger mb-4" role="alert">
                {error}
              </div>
            )}

            {/* Chargement */}
            {loading && (
              <div className="text-center text-muted py-4">
                <div className="spinner-border text-primary me-2" role="status" />
                Chargement du profil...
              </div>
            )}

            {/* Profil étudiant */}
            {user.role === 'ETUDIANT' && !loading && studentProfile && (
              <div className="mt-3">
                <StudentProfile profile={studentProfile} isEditable={true} />
              </div>
            )}

            {/* Aucun profil trouvé */}
            {user.role === 'ETUDIANT' && !loading && !studentProfile && !error && (
              <div className="text-center text-muted py-4">
                Aucun profil trouvé. Veuillez compléter votre profil.
              </div>
            )}

            {/* Vue pour les autres rôles */}
            {user.role !== 'ETUDIANT' && (
              <div className="mt-4">
                <p className="text-secondary">
                  Bienvenue dans votre espace {user.role.toLowerCase()} !
                </p>
                {/* Contenu spécifique au rôle à venir */}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
