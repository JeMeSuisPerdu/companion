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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '700px' }}>
        <div className="text-center mb-4">
          <Link to="/" className="text-decoration-none">
            <h1 className="text-primary fw-bold">Companion</h1>
          </Link>
          <h2 className="fw-bold mb-2">Inscription Entreprise</h2>
          <p className="text-muted">
            Rejoignez notre réseau d'entreprises inclusives
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card shadow p-4">
          <h4 className="mb-3 text-primary">Informations de compte</h4>

          <div className="mb-3">
            <label className="form-label">Email professionnel</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <h4 className="mt-4 mb-3 text-primary">Informations de l'entreprise</h4>

          <div className="mb-3">
            <label className="form-label">Nom de l'entreprise</label>
            <input
              type="text"
              name="nom"
              className="form-control"
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Secteur d'activité</label>
              <select
                name="secteur"
                className="form-select"
                value={formData.secteur}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez...</option>
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
            <div className="col-md-6 mb-3">
              <label className="form-label">Taille</label>
              <select
                name="taille"
                className="form-select"
                value={formData.taille}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="TPE">TPE (1-9 salariés)</option>
                <option value="PME">PME (10-249 salariés)</option>
                <option value="ETI">ETI (250-4999 salariés)</option>
                <option value="GE">GE (5000+ salariés)</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Numéro SIRET</label>
            <input
              type="text"
              name="siret"
              className="form-control"
              value={formData.siret}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Adresse</label>
            <input
              type="text"
              name="adresse"
              className="form-control"
              value={formData.adresse}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Ville</label>
              <input
                type="text"
                name="ville"
                className="form-control"
                value={formData.ville}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Code postal</label>
              <input
                type="text"
                name="codePostal"
                className="form-control"
                value={formData.codePostal}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Site web</label>
            <input
              type="url"
              name="siteWeb"
              className="form-control"
              value={formData.siteWeb}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Présentez votre entreprise..."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Politiques d'inclusivité</label>
            <textarea
              name="politiquesInclusivite"
              className="form-control"
              rows="3"
              value={formData.politiquesInclusivite}
              onChange={handleInputChange}
              placeholder="Décrivez vos politiques d'inclusion et d'accessibilité..."
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Contact RH</label>
              <input
                type="text"
                name="contactRH"
                className="form-control"
                value={formData.contactRH}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Poste du contact</label>
              <input
                type="text"
                name="posteContact"
                className="form-control"
                value={formData.posteContact}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="terms-entreprise"
              className="form-check-input"
              required
            />
            <label htmlFor="terms-entreprise" className="form-check-label">
              Je m'engage à promouvoir l'inclusion et l'accessibilité dans mon entreprise
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
            <Link to="/connexion" className="text-decoration-none text-primary">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseRegistration;
