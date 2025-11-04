// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">
            Bienvenue sur <span className="text-primary">Companion</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            La plateforme inclusive qui connecte étudiants, écoles et entreprises
            pour faciliter l’insertion professionnelle.
          </p>
        </div>

        {/* Cartes de sélection de rôle */}
        <div className="row g-4 justify-content-center">
          {/* Étudiant */}
          <div className="col-md-4">
            <div className="card shadow-sm text-center border-0 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mx-auto mb-3"
                  style={{ width: '80px', height: '80px', fontSize: '2rem' }}
                >
                  🎓
                </div>
                <h5 className="fw-semibold mb-2">Étudiant</h5>
                <p className="text-muted mb-4">
                  Trouvez des entreprises adaptées à votre profil et développez votre réseau professionnel.
                </p>
                <Link to="/inscription/etudiant" className="btn btn-primary rounded-pill px-4 shadow-sm">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>

          {/* École */}
          <div className="col-md-4">
            <div className="card shadow-sm text-center border-0 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3 mx-auto mb-3"
                  style={{ width: '80px', height: '80px', fontSize: '2rem' }}
                >
                  🏫
                </div>
                <h5 className="fw-semibold mb-2">École</h5>
                <p className="text-muted mb-4">
                  Valorisez vos formations et connectez-vous avec le monde professionnel.
                </p>
                <Link to="/inscription/ecole" className="btn btn-success rounded-pill px-4 shadow-sm">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>

          {/* Entreprise */}
          <div className="col-md-4">
            <div className="card shadow-sm text-center border-0 h-100">
              <div className="card-body p-4">
                <div
                  className="d-flex align-items-center justify-content-center bg-purple bg-opacity-10 rounded-3 mx-auto mb-3"
                  style={{ width: '80px', height: '80px', fontSize: '2rem', backgroundColor: '#e5d5fa' }}
                >
                  💼
                </div>
                <h5 className="fw-semibold mb-2">Entreprise</h5>
                <p className="text-muted mb-4">
                  Accédez à un vivier de talents diversifiés et renforcez votre inclusivité.
                </p>
                <Link to="/inscription/entreprise" className="btn btn-secondary rounded-pill px-4 shadow-sm">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Valeur ajoutée */}
        <div className="text-center mt-5 pt-5">
          <h2 className="fw-bold mb-5 display-6">
            Une approche gagnant-gagnant-gagnant
          </h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3"
                    style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
                  >
                    🌟
                  </div>
                  <h6 className="fw-semibold">Pour les étudiants</h6>
                  <p className="text-muted small">
                    Accès à des entreprises véritablement inclusives et adaptées à votre profil.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mx-auto mb-3"
                    style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
                  >
                    🚀
                  </div>
                  <h6 className="fw-semibold">Pour les entreprises</h6>
                  <p className="text-muted small">
                    Accès à des talents diversifiés et augmentation de votre score d'inclusivité.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 rounded-circle mx-auto mb-3"
                    style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
                  >
                    📊
                  </div>
                  <h6 className="fw-semibold">Pour les écoles</h6>
                  <p className="text-muted small">
                    Amélioration du taux d'insertion et réseau professionnel étendu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
