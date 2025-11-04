// src/services/authService.js
import { api } from './api';
import { errorService, AppError } from './errorService';

export const authService = {
  // --------------------
  // Inscriptions
  // --------------------
  async registerEtudiant(userData) {
    try {
      const response = await api.post('/auth/inscription/etudiant', userData);
      return response.data;
    } catch (error) {
      throw new AppError(
        errorService.handleApiError(error),
        'REGISTER_ETUDIANT_ERROR',
        error.response?.status
      );
    }
  },

  async registerEcole(ecoleData) {
    try {
      const response = await api.post('/auth/inscription/ecole', ecoleData);
      return response.data;
    } catch (error) {
      throw new AppError(
        errorService.handleApiError(error),
        'REGISTER_ECOLE_ERROR',
        error.response?.status
      );
    }
  },

  async registerEntreprise(entrepriseData) {
    try {
      const response = await api.post('/auth/inscription/entreprise', entrepriseData);
      return response.data;
    } catch (error) {
      throw new AppError(
        errorService.handleApiError(error),
        'REGISTER_ENTREPRISE_ERROR',
        error.response?.status
      );
    }
  },

  // --------------------
  // Connexion
  // --------------------
  async login(credentials) {
    try {
      const response = await api.post('/auth/connexion', credentials);

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }

      return response.data;
    } catch (error) {
      throw new AppError(
        errorService.handleApiError(error),
        'LOGIN_ERROR',
        error.response?.status
      );
    }
  },

  // --------------------
  // Déconnexion
  // --------------------
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    delete api.defaults.headers.common['Authorization'];
  },

  // --------------------
  // Gestion du token / utilisateur courant
  // --------------------
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getToken() {
    return localStorage.getItem('authToken');
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  // --------------------
  // Initialisation du token au démarrage
  // --------------------
  initializeAuth() {
    const token = this.getToken();
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
};