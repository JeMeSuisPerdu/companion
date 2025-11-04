import React from 'react';

const StudentProfile = ({ profile, isEditable = false }) => {
  return (
    <div className="card shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h2 className="h4 fw-bold mb-1">
            {profile.prenom} {profile.nom}
          </h2>
          <p className="text-muted mb-0">{profile.niveauEtude}</p>
        </div>
        {isEditable && (
          <button className="btn btn-primary">
            Modifier le profil
          </button>
        )}
      </div>

      <div className="row g-4">
        {/* Informations personnelles */}
        <div className="col-md-6">
          <h5 className="fw-semibold mb-3">Informations personnelles</h5>
          <div>
            <strong>Date de naissance :</strong>{' '}
            <span className="text-muted">{profile.dateNaissance}</span>
          </div>
        </div>

        {/* Compétences */}
        <div className="col-md-6">
          <h5 className="fw-semibold mb-3">Compétences</h5>
          <div className="d-flex flex-wrap gap-2">
            {profile.competences.map((competence, index) => (
              <span
                key={index}
                className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle px-3 py-2 rounded-pill"
              >
                {competence}
              </span>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="col-md-6">
          <h5 className="fw-semibold mb-3">Centres d'intérêt</h5>
          <div className="d-flex flex-wrap gap-2">
            {profile.centresInteret.map((interet, index) => (
              <span
                key={index}
                className="badge bg-success-subtle text-success-emphasis border border-success-subtle px-3 py-2 rounded-pill"
              >
                {interet}
              </span>
            ))}
          </div>
        </div>

        {/* Besoins d'accompagnement */}
        {profile.besoinsAccompagnement && (
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3">Besoins d'accompagnement</h5>
            <p className="text-muted">{profile.besoinsAccompagnement}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
