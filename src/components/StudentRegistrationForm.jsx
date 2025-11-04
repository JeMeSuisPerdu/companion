import React, { useState } from 'react';
import { authService } from '../services/authService';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    niveauEtude: '',
    competences: [],
    centresInteret: [],
    besoinsAccompagnement: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.registerEtudiant(formData);
      // Redirection ou message de succès
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mot de passe</label>
        <input
          type="password"
          className="form-control"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prénom</label>
          <input
            type="text"
            className="form-control"
            value={formData.prenom}
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        S'inscrire en tant qu'étudiant
      </button>
    </form>
  );
};

export default StudentRegistrationForm;
