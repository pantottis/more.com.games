const CACHE_NAME = 'game-suite-v1';
const urlsToCache = [
  './',
  './index.html',
  './1.jpg',
  './2.jpg',
  './3.jpg',
  './4.jpg',
  './5.jpg',
  './6.jpg',
  './7.jpg',
  './8.jpg',
  './9.jpg',
  './10.jpg',
  './11.jpg',
  './12.jpg',
  './13.jpg',
  './14.jpg',
  './15.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});