// User
export const User = {
  id: 0,
  email: '',
  role: 'ETUDIANT', // 'ETUDIANT' | 'ECOLE' | 'ENTREPRISE'
  verified: false,
  createdAt: ''
};

// EtudiantProfile
export const EtudiantProfile = {
  id: 0,
  nom: '',
  prenom: '',
  dateNaissance: '',
  niveauEtude: '',
  competences: [],
  centresInteret: [],
  besoinsAccompagnement: undefined
};

// EcoleProfile
export const EcoleProfile = {
  id: 0,
  nom: '',
  typeEtablissement: '',
  adresse: undefined,
  ville: undefined,
  codePostal: undefined,
  telephone: undefined,
  siteWeb: undefined,
  description: undefined,
  specialites: [],
  nombreEtudiants: undefined,
  anneeCreation: undefined
};

// EntrepriseProfile
export const EntrepriseProfile = {
  id: 0,
  nom: '',
  secteur: '',
  taille: '',
  siret: undefined,
  adresse: undefined,
  ville: undefined,
  codePostal: undefined,
  telephone: undefined,
  siteWeb: undefined,
  description: undefined,
  politiquesInclusivite: undefined,
  contactRH: undefined,
  posteContact: undefined,
  verified: false
};
