const CACHE_NAME = 'caim-cache-v1';
const OFFLINE_URL = '/index.html'; // Кэшируем главную страницу

// При установке кэшируем оболочку приложения
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([OFFLINE_URL, '/']);
        })
    );
});

// Перехватываем запросы
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Если сети нет, отдаем закэшированный index.html
            return caches.match(OFFLINE_URL);
        })
    );
});