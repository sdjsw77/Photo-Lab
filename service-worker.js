const CACHE_NAME = 'photo-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
  // 만약 별도의 css나 js 파일이 있다면 여기에 추가하세요. 예: './style.css'
];

// 설치 단계: 필수 파일 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 네트워크 요청 시 캐시 우선 사용
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});