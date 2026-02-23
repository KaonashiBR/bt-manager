// Service Worker do BT Manager
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Permite que o PWA funcione mesmo que o cache esteja vazio
});
