// src/services/errorService.js
export class AppError extends Error {
  constructor(message, code, status) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
  }
}

export const errorService = {
  handleApiError(error) {
    console.error('API Error:', error);

    if (error.response) {
      // Erreur du serveur
      const status = error.response.status;
      const message = error.response.data?.message || error.response.data;

      switch (status) {
        case 400:
          return message || 'Données invalides';
        case 401:
          return 'Identifiants incorrects';
        case 403:
          return 'Accès non autorisé';
        case 404:
          return 'Ressource non trouvée';
        case 409:
          return message || 'Conflit de données';
        case 422:
          return 'Données de validation incorrectes';
        case 500:
          return 'Erreur interne du serveur';
        default:
          return message || `Erreur ${status}`;
      }
    } else if (error.request) {
      // Pas de réponse du serveur
      return 'Impossible de contacter le serveur. Vérifiez votre connexion.';
    } else {
      // Erreur de configuration
      return 'Erreur de configuration de la requête';
    }
  },

  // Intercepteur global pour Axios
  setupResponseInterceptor() {
    const { api } = require('./api');

    api.interceptors.response.use(
      response => response,
      error => {
        const message = this.handleApiError(error);
        throw new AppError(message, error.code, error.response?.status);
      }
    );
  }
};
