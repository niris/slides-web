const version = "0.0.1";
const cacheName = `slides-web-${version}`;
//(grep -o 'http[^")'"']*" static/index.html ; ls static) | sed -E "s:(.*):'\1',:"
const assets = [
'https://unpkg.com/vue-router@3.1.3/dist/vue-router.min.js',
'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/remark/0.14.0/remark.min.js',
'https://i.imgur.com/EKPtgdk.png',
'https://i.imgur.com/qCRpR5n.png',
'https://i.imgur.com/BEyndbb.png',
'https://i.imgur.com/bEkVcTq.jpg',
'https://i.imgur.com/qYgz7S6.png',
'https://i.imgur.com/Lnw5i8h.jpg',
'https://i.imgur.com/7XjvVxJ.png',
'https://i.imgur.com/hfYBBlz.png',
'/slides-web/README.md',
'/slides-web/'
];
console.log(self)
self.addEventListener('install', e => e.waitUntil(caches.open(cacheName).then(c => c.addAll(assets).then(() => self.skipWaiting()))));

self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  event.respondWith(caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => response || fetch(event.request))
  );
});
