// ===============================
// ===== SERVICE WORKER =====
// ===============================

const CACHE_NAME = "mufravault-x-v4";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/main.css",
  "/css/responsive.css",

  "/js/data.js",
  "/js/form.js",
  "/js/search.js",
  "/js/sort.js",
  "/js/stats.js",
  "/js/theme.js",
  "/js/app.js",
  "/js/router.js",

  "/manifest.json"
];


// ===== INSTALL =====
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ===== ACTIVATE =====
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ===== FETCH =====
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});