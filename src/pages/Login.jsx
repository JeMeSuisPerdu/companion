import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(credentials);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setError(
        error.response?.data?.message ||
        'Erreur de connexion. Vérifiez vos identifiants.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light py-5">
      <div className="card shadow-sm border-0" style={{ maxWidth: '420px', width: '100%' }}>
        <div className="card-body p-4">
          {/* Logo & titre */}
          <div className="text-center mb-4">
            <Link to="/" className="text-decoration-none">
              <span className="h3 fw-bold text-primary">Companion</span>
            </Link>
            <h2 className="h5 fw-bold text-dark mt-3">Connexion à votre compte</h2>
            <p className="text-muted small">
              Ou{' '}
              <Link to="/" className="text-primary text-decoration-none">
                créez un nouveau compte
              </Link>
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger py-2" role="alert">
                {error}
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="vous@exemple.com"
                required
                value={credentials.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Votre mot de passe"
                required
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                />
                <label className="form-check-label small" htmlFor="remember-me">
                  Se souvenir de moi
                </label>
              </div>
              <a href="#" className="small text-primary text-decoration-none">
                Mot de passe oublié ?
              </a>
            </div>

            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                    Connexion...
                  </>
                ) : (
                  'Se connecter'
                )}
              </button>
            </div>
          </form>

          {/* Lien bas de formulaire */}
          <div className="text-center mt-3">
            <p className="small text-muted mb-0">
              Nouveau sur Companion ?{' '}
              <Link to="/" className="text-primary text-decoration-none">
                Choisissez votre type de compte
              </Link>
            </p>
          </div>

          {/* Options de connexion rapide */}
          <div className="border-top mt-4 pt-3">
            <p className="text-center text-secondary small mb-3">
              Démo rapide (développement)
            </p>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() => setCredentials({ email: 'etudiant@test.com', password: 'password' })}
              >
                Étudiant
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-success"
                onClick={() => setCredentials({ email: 'ecole@test.com', password: 'password' })}
              >
                École
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-purple"
                onClick={() => setCredentials({ email: 'entreprise@test.com', password: 'password' })}
                style={{ borderColor: '#6f42c1', color: '#6f42c1' }}
              >
                Entreprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
