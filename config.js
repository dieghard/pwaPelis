// Configuración de la aplicación
const CONFIG = {
  // API Configuration
  OMDB: {
    // IMPORTANTE: Reemplaza con tu API key de OMDB
    API_KEY: 'feca68e3', // Tu API key aquí
    BASE_URL: 'https://www.omdbapi.com/',
    RATE_LIMIT: 1000, // requests por día (plan gratuito)
    TIMEOUT: 10000, // 10 segundos timeout
  },

  // App Configuration
  APP: {
    NAME: 'Mi Filmoteca PWA',
    VERSION: '1.0.1',
    AUTHOR: 'Diego Markiewicz',
    EMAIL: 'dieghard@gmail.com',
  },

  // Performance Settings
  PERFORMANCE: {
    SEARCH_DEBOUNCE: 500, // ms
    CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 horas
    MAX_SEARCH_RESULTS: 20,
    EPISODE_BATCH_SIZE: 10,
  },

  // UI Settings
  UI: {
    TOAST_DURATION: 3000, // ms
    ANIMATION_DURATION: 300, // ms
    MOBILE_BREAKPOINT: 768, // px
    THEME: {
      PRIMARY: '#ffb000',
      SECONDARY: '#000',
      SUCCESS: '#00ff41',
      WARNING: '#ffff00',
      ERROR: '#ff073a',
    }
  },

  // Storage Settings
  STORAGE: {
    LIBRARY_KEY: 'biblioteca_pwa_library',
    EPISODES_KEY: 'biblioteca_pwa_episodes', 
    SETTINGS_KEY: 'biblioteca_pwa_settings',
    VERSION_KEY: 'biblioteca_pwa_version',
  },

  // Features Flags
  FEATURES: {
    OFFLINE_MODE: true,
    PUSH_NOTIFICATIONS: false, // Para futuras versiones
    ANALYTICS: false, // Para futuras versiones
    DARK_MODE: false, // Para futuras versiones
  },

  // Error Messages
  MESSAGES: {
    NETWORK_ERROR: 'Error de conexión. Inténtalo de nuevo.',
    API_LIMIT_REACHED: 'Límite de búsquedas alcanzado. Intenta mañana.',
    NO_RESULTS: 'No se encontraron resultados.',
    GENERIC_ERROR: 'Algo salió mal. Inténtalo de nuevo.',
    OFFLINE: 'Sin conexión. Usando datos guardados.',
  }
};

// Validar configuración al cargar
if (typeof window !== 'undefined') {
  // Verificar API key
  if (CONFIG.OMDB.API_KEY === 'feca68e3') {
    console.warn('⚠️ IMPORTANTE: Cambia la API key por la tuya en config.js');
  }

  // Hacer CONFIG global para acceso desde cualquier parte
  window.APP_CONFIG = CONFIG;
}

// Export para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}