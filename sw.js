const CACHE_NAME = 'biblioteca-pwa-v1.1.0';
const STATIC_CACHE = 'static-v1.1.0';
const DYNAMIC_CACHE = 'dynamic-v1.1.0';

// Recursos estáticos para cachear
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './browserconfig.xml',
  // Iconos principales para cachear
  './assets/android/android-launchericon-192-192.png',
  './assets/android/android-launchericon-512-512.png',
  './assets/ios/180.png',
  './assets/ios/152.png',
  './assets/ios/144.png',
  './assets/ios/120.png',
  './assets/ios/114.png',
  './assets/ios/76.png',
  './assets/ios/72.png',
  './assets/ios/60.png',
  './assets/ios/57.png',
  './assets/ios/32.png',
  './assets/ios/16.png',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Share+Tech+Mono&display=swap'
];

// Recursos dinámicos (API responses)
const DYNAMIC_LIMIT = 50;

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting(); // Activa inmediatamente
      })
      .catch(err => console.error('[SW] Error caching static assets:', err))
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Eliminar caches antiguos
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim(); // Toma control inmediatamente
      })
  );
});

// Estrategia de caching para requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin && !url.hostname.includes('omdbapi.com') && !url.hostname.includes('googleapis.com')) {
    return;
  }

  // Estrategia Cache First para assets estáticos
  if (STATIC_ASSETS.some(asset => request.url.includes(asset.replace('./', '')))) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Estrategia Network First para API de OMDB
  if (url.hostname.includes('omdbapi.com')) {
    event.respondWith(networkFirstWithFallback(request, DYNAMIC_CACHE));
    return;
  }

  // Estrategia Cache First para fuentes de Google
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Por defecto: Network First
  event.respondWith(networkFirstWithFallback(request, DYNAMIC_CACHE));
});

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Serving from cache:', request.url);
      return cached;
    }
    
    const response = await fetch(request);
    
    if (response.ok) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Cache First error:', error);
    return new Response('Offline - Content not available', { 
      status: 503,
      statusText: 'Service Unavailable' 
    });
  }
}

// Network First Strategy con fallback a cache
async function networkFirstWithFallback(request, cacheName) {
  try {
    // Intentar red primero
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(cacheName);
      
      // Limitar cache dinámico
      limitCacheSize(cacheName, DYNAMIC_LIMIT);
      
      // Guardar en cache
      cache.put(request, response.clone());
      console.log('[SW] Network response cached:', request.url);
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    // Si falla la red, buscar en cache
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Serving from cache (network failed):', request.url);
      return cached;
    }
    
    // Si no hay cache, devolver error offline
    return new Response(
      JSON.stringify({ 
        error: 'Offline', 
        message: 'No network connection and no cached data available' 
      }),
      { 
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Limitar tamaño de cache dinámico
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxItems) {
    console.log(`[SW] Limiting cache ${cacheName} to ${maxItems} items`);
    await cache.delete(keys[0]); // Eliminar el más antiguo
    limitCacheSize(cacheName, maxItems); // Recursivo hasta llegar al límite
  }
}

// Escuchar mensajes del cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});