// frontend/pwa/generate-sw.js

const { generateSW } = require('workbox-build');
const path = require('path');
const fs = require('fs');

const BUILD_DIR = path.resolve('build/frontend');
const isPreRelease = process.env.NODE_ENV === 'pre-release';
const BASE_PATH = isPreRelease ? '/pwa-template/' : '/';

const PWA_DIR = path.join(BUILD_DIR, 'pwa');
if (!fs.existsSync(PWA_DIR)) fs.mkdirSync(PWA_DIR, { recursive: true });

generateSW({
  globDirectory: BUILD_DIR,
  globPatterns: ['**/*.{html,js,css,png,svg,ico,json,webp}'],
  swDest: path.join(PWA_DIR, 'service-worker.js'),
  navigateFallback: `${BASE_PATH}pwa/offline.html`,
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: ({ request }) =>
        ['style', 'script', 'document'].includes(request.destination),
      handler: 'CacheFirst',
      options: { cacheName: 'app-shell-cache', expiration: { maxEntries: 50 } },
    },
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'image-cache', expiration: { maxEntries: 100 } },
    },
    {
      urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
      handler: 'NetworkFirst',
      options: { cacheName: 'api-cache', networkTimeoutSeconds: 5 },
    },
  ],
})
  .then(({ count, size }) => {
    console.log(`✅ Service Worker generated (${count} files, ${size} bytes)`);
  })
  .catch((err) => {
    console.error('❌ Failed to generate Service Worker:', err);
    process.exit(1);
  });
