'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6ec9c282fe0b1d7aba33492602c8f489",
"assets/assets/bulutlu.png": "6e843fd0c379e008e8732b1c5c3a4c34",
"assets/assets/gece.png": "4780dabb59c0d2168772f0c3b293d7cc",
"assets/assets/gunesli.png": "316361b56d2a783c2d5e54e640dc0480",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/cevahircinar.jpg": "9c4d04f25abd33c3c4d1527ff63f40d8",
"assets/images/flag/turkey.png": "03a37f92853671eb21269f8269f852b8",
"assets/images/flag/united-kingdom.png": "aac0dfefc080856931658ea9c760534e",
"assets/images/gulsen.jpg": "2001dbab8c4fa7a4e3c6faa6737528cc",
"assets/images/login_page1.jpg": "4e1d38ea73d3b82749b24a463ed00a09",
"assets/images/mutlu_findik.png": "5a8819ade9d65ab92c8698fd8a2bb881",
"assets/images/project/bulanut_details2.jpg": "2f5e1bb4639d8b1be96b4f5414a92771",
"assets/images/project/bulanut_home1.jpg": "4e1d38ea73d3b82749b24a463ed00a09",
"assets/images/project/bulanut_logo.png": "864836f67dbe8d81109052860d7fc9e3",
"assets/images/project/bulanut_tools.jpg": "14c3c278c57b6e9a028fef544dda91c0",
"assets/images/project/pHome.jpg": "864836f67dbe8d81109052860d7fc9e3",
"assets/images/project/pSekil1.jpg": "661adf03fb535338ddc733da7542cce7",
"assets/images/project/pSekil2.jpg": "0eb2d8701acca9ff41e840abcc042d6d",
"assets/images/project/pSekil3.jpg": "9c3cb86caaa85843f96e38383a559885",
"assets/images/project/pSekil4.jpg": "35739e07eb74927bb3c8a6c5b8324289",
"assets/images/project/pTablo1.jpg": "b6efb82d57b98dfd7c34dde1a9dbc15b",
"assets/images/project/pTablo2.jpg": "6328e76f7f02dfded204fc92d9040511",
"assets/images/project/pTablo3.jpg": "905a4e9e7d701e7954d371b267f38868",
"assets/images/project/pTablo4.jpg": "eb6b7f86b35891c354b1ec1e3f40ceeb",
"assets/images/project/pTablo5.jpg": "505568de7cbeb14aa229cd617ca91dbc",
"assets/images/tesekkur.png": "804a3dddcd1ed13b0f3b577647934d5d",
"assets/images/tubitakLogo.jpg": "9ab0cf1b3c9a5c648e2f9ab921bf9c38",
"assets/images/tubitakLogo.png": "79ad03368e2c69bab297bb3cd9b501e1",
"assets/images/upload_data.png": "848e1cb0bcb95adcc63ee89fbecff7d0",
"assets/NOTICES": "97be3974769883032a3ea0bc41f88bbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/shaders/ink_sparkle.frag": "92514212ce53a9136d5fcd4f9279b044",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f47ee85eb9eaff7c2f3a25b3bf396c7",
"/": "5f47ee85eb9eaff7c2f3a25b3bf396c7",
"main.dart.js": "64db5cc7f4f7fec4c4dbf58ecd4810cb",
"manifest.json": "77ccb05dc51a06eb45e81b5a81bdc61e",
"version.json": "089cfdaa768b6fadaedf73b066ddf418"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
