const CACHE_NAME = 'pwa-cache-v2';
const urlsToCache = [
  '/',
  '/pwa_omdb_biblioteca_de_pelis_y_series_html_css_js_en_1_archivo.html',
  // Agregar otros recursos si es necesario
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache requests from the same origin
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
  }
});