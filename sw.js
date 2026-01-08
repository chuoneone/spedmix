const cacheName = 'spedmix-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdn.tailwindcss.com?plugins=forms,typography'
];

// 安裝並快取基礎檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// 攔截請求：先看有沒有快取，沒有才走網路
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
