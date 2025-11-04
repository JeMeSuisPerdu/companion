// src/pages/registration/EntrepriseRegistration.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../../services/authService';

const EntrepriseRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nom: '',
    secteur: '',
    taille: '',
    siret: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: 'France',
    telephone: '',
    siteWeb: '',
    description: '',
    politiquesInclusivite: '',
    contactRH: '',
    posteContact: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await authService.registerEntreprise(formData);
      alert("Inscription de l'entreprise réussie ! En attente de vérification.");
      navigate('/connexion');
    } catch (error) {
      console.error('Erreur lors de l’inscription:', error);
      alert(error.response?.data?.message || 'Erreur lors de l’inscription');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className="text-center mb-4">
          <Link to="/" className="text-decoration-none">
            <h2 className="fw-bold text-primary mb-2">Companion</h2>
          </Link>
          <h3 className="fw-semibold">Inscription Entreprise</h3>
          <p className="text-muted">Rejoignez notre réseau d'entreprises inclusives</p>
        </div>

        <form onSubmit={handleSubmit} className="card shadow p-4">
          <h5 className="fw-bold mb-3">Informations de compte</h5>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email professionnel"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="row g-3 mb-3">
            <div className="col">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <h5 className="fw-bold mt-4 mb-3">Informations de l’entreprise</h5>

          <div className="mb-3">
            <input
              type="text"
              name="nom"
              placeholder="Nom de l'entreprise"
              value={formData.nom}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="row g-3 mb-3">
            <div className="col">
              <select
                name="secteur"
                value={formData.secteur}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Secteur d'activité</option>
                <option value="TECHNOLOGIE">Technologie</option>
                <option value="SANTE">Santé</option>
                <option value="FINANCE">Finance</option>
                <option value="EDUCATION">Éducation</option>
                <option value="COMMERCE">Commerce</option>
                <option value="INDUSTRIE">Industrie</option>
                <option value="CONSULTING">Consulting</option>
                <option value="AUTRE">Autre</option>
              </select>
            </div>
            <div className="col">
              <select
                name="taille"
                value={formData.taille}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Taille de l'entreprise</option>
                <option value="TPE">TPE (1-9 salariés)</option>
                <option value="PME">PME (10-249 salariés)</option>
                <option value="ETI">ETI (250-4999 salariés)</option>
                <option value="GE">GE (5000+ salariés)</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="siret"
              placeholder="Numéro SIRET"
              value={formData.siret}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="adresse"
              placeholder="Adresse"
              value={formData.adresse}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="row g-3 mb-3">
            <div className="col">
              <input
                type="text"
                name="ville"
                placeholder="Ville"
                value={formData.ville}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="codePostal"
                placeholder="Code postal"
                value={formData.codePostal}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="url"
              name="siteWeb"
              placeholder="Site web"
              value={formData.siteWeb}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              rows={3}
              placeholder="Description de l'entreprise"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
            ></textarea>
          </div>

          <div className="mb-3">
            <textarea
              name="politiquesInclusivite"
              rows={3}
              placeholder="Politiques d'inclusion et d'accessibilité"
              value={formData.politiquesInclusivite}
              onChange={handleInputChange}
              className="form-control"
            ></textarea>
          </div>

          <div className="row g-3 mb-3">
            <div className="col">
              <input
                type="text"
                name="contactRH"
                placeholder="Contact RH"
                value={formData.contactRH}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="posteContact"
                placeholder="Poste du contact"
                value={formData.posteContact}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              id="terms-entreprise"
              className="form-check-input"
              required
            />
            <label htmlFor="terms-entreprise" className="form-check-label">
              Je m'engage à promouvoir l'inclusion et l'accessibilité
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-100"
          >
            {isLoading ? 'Inscription...' : "S'inscrire en tant qu'entreprise"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted">
            Déjà un compte ?{' '}
            <Link to="/connexion" className="text-primary fw-semibold">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseRegistration;
