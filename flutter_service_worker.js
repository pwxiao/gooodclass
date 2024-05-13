'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "985d451dce92bd6aee1e92bbf11102df",
"assets/AssetManifest.bin.json": "10fb643b52e6c7424dea69a9523c8cdc",
"assets/AssetManifest.json": "29334a72aba6365d8cbd4904929f52cd",
"assets/assets/checkin(1).png": "e0433dad298588cb2931c823472e8f1e",
"assets/assets/checkin(2).png": "05baf3612e806443fcfbb74c7da5a680",
"assets/assets/checkin(3).png": "01ccd1f433d6e386a83b298e6d0d0212",
"assets/assets/checkin(4).png": "c182f810fc6e0a59390fcb0067986062",
"assets/assets/checkin(5).png": "b80fde64fa93235b139f57406100ee67",
"assets/assets/checkin(6).png": "5f23912fccb7cb111daac26780ec0c6d",
"assets/assets/checkin(7).png": "b80fde64fa93235b139f57406100ee67",
"assets/assets/login.png": "ae311cd16f70b83b1e849b9fae2ba645",
"assets/assets/nocheckin.png": "5f23912fccb7cb111daac26780ec0c6d",
"assets/assets/noclass.gif": "4140f0822835c8c95a93a473e264312b",
"assets/assets/over.png": "208c3a715d37ba2fa35e96c1f9494d0d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f2215f8f7073f6b8df25082cfbd8b095",
"assets/NOTICES": "9157f7debd7fbadfd4d735237f883be7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"gooodclass/.git/COMMIT_EDITMSG": "9a8ad92c50cae39aa2c5604fd0ab6d8c",
"gooodclass/.git/config": "9e19af4823675cfa5fadbb816a025c0a",
"gooodclass/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gooodclass/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"gooodclass/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gooodclass/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gooodclass/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"gooodclass/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gooodclass/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gooodclass/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"gooodclass/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"gooodclass/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"gooodclass/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gooodclass/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gooodclass/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gooodclass/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"gooodclass/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"gooodclass/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"gooodclass/.git/index": "68a6899e149c84cd1d248fcea0f128a7",
"gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/.git/logs/HEAD": "1f1ac62d2f32b18355931b67b2b52c85",
"gooodclass/.git/logs/refs/heads/main": "1f1ac62d2f32b18355931b67b2b52c85",
"gooodclass/.git/logs/refs/remotes/origin/HEAD": "5765ee73eb6af542fe985baec5f57ee1",
"gooodclass/.git/logs/refs/remotes/origin/main": "5e31adb7118f1e2d7d741c28c513183e",
"gooodclass/.git/objects/10/1d481d56db9fa2ee4e0fd761cc25bcd94dfbd3": "226545b63850ee1db1b228a10f4b6b35",
"gooodclass/.git/objects/1c/28bffa6f6af392803a26171d55a72077ee4154": "d31a6641d7f2319d4ee9a155e41d2f43",
"gooodclass/.git/objects/1d/7d723d4ea1ad2a94162c357b17a52041ca8d17": "aab3b8a798c63f5ca6066d699f112ae8",
"gooodclass/.git/objects/26/b9abc04c10d57d11a81eb3c2d6d04c2d1fa542": "e08dc0de82e814046f82a672b7501326",
"gooodclass/.git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
"gooodclass/.git/objects/7e/f484d27390cb84778ffa56f0887b7eeb272bef": "3186704ccdeb42de44a6a51930f51da7",
"gooodclass/.git/objects/8a/6adb394eb482913d9100bb0a471ea494ea3a95": "be0a533e2a9bb064fa5407893cfe983e",
"gooodclass/.git/objects/b8/85f3abae8dec151de3dd70b5fc5252dc520a24": "294105540891d0a45ef025802be662e6",
"gooodclass/.git/objects/e2/063db4a2f3daaa4f5033835338d3f9f866d61f": "7c8dc4e3348f454e20ba4c15163ec9e7",
"gooodclass/.git/objects/e8/7eb416682a7f5005a0a7251fa6454c2c8f8a2b": "ad301bb878500e0f0975ea7f28da58ac",
"gooodclass/.git/objects/pack/pack-5d38b7966d81647911f6eb31d03331d499a0c3e9.idx": "4548642dbf4cf856926886de16f46164",
"gooodclass/.git/objects/pack/pack-5d38b7966d81647911f6eb31d03331d499a0c3e9.pack": "de7c05f61dda6947b9e1f73a19e00fbe",
"gooodclass/.git/objects/pack/pack-5d38b7966d81647911f6eb31d03331d499a0c3e9.rev": "3203ece775f57099a9ffa64b61bccb20",
"gooodclass/.git/packed-refs": "47b8acca32bb7e64181de80ce6810f2b",
"gooodclass/.git/refs/heads/main": "6d69052878f584e506d787876ad12975",
"gooodclass/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gooodclass/.git/refs/remotes/origin/main": "6d69052878f584e506d787876ad12975",
"gooodclass/assets/AssetManifest.bin": "985d451dce92bd6aee1e92bbf11102df",
"gooodclass/assets/AssetManifest.bin.json": "10fb643b52e6c7424dea69a9523c8cdc",
"gooodclass/assets/AssetManifest.json": "29334a72aba6365d8cbd4904929f52cd",
"gooodclass/assets/assets/1.gif": "92dbd576d53ceb90307eba0fe021cae8",
"gooodclass/assets/assets/checkin(1).png": "e0433dad298588cb2931c823472e8f1e",
"gooodclass/assets/assets/checkin(2).png": "05baf3612e806443fcfbb74c7da5a680",
"gooodclass/assets/assets/checkin(3).png": "01ccd1f433d6e386a83b298e6d0d0212",
"gooodclass/assets/assets/checkin(4).png": "c182f810fc6e0a59390fcb0067986062",
"gooodclass/assets/assets/checkin(5).png": "b80fde64fa93235b139f57406100ee67",
"gooodclass/assets/assets/checkin(6).png": "5f23912fccb7cb111daac26780ec0c6d",
"gooodclass/assets/assets/checkin(7).png": "b80fde64fa93235b139f57406100ee67",
"gooodclass/assets/assets/login.png": "ae311cd16f70b83b1e849b9fae2ba645",
"gooodclass/assets/assets/nocheckin.png": "5f23912fccb7cb111daac26780ec0c6d",
"gooodclass/assets/assets/noclass.gif": "4140f0822835c8c95a93a473e264312b",
"gooodclass/assets/assets/over.png": "208c3a715d37ba2fa35e96c1f9494d0d",
"gooodclass/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"gooodclass/assets/fonts/MaterialIcons-Regular.otf": "f2215f8f7073f6b8df25082cfbd8b095",
"gooodclass/assets/NOTICES": "9157f7debd7fbadfd4d735237f883be7",
"gooodclass/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"gooodclass/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"gooodclass/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"gooodclass/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"gooodclass/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"gooodclass/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"gooodclass/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"gooodclass/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"gooodclass/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"gooodclass/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gooodclass/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"gooodclass/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"gooodclass/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"gooodclass/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"gooodclass/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"gooodclass/index.html": "4bad6d97399d763d077e1364836b9c80",
"/": "609a0291fc8ef025d14822f53a2e7d95",
"gooodclass/main.dart.js": "f39cc3b28b845189e9833473cd48a41c",
"gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/version.json": "9ae9901eb37b4122b822e41cdecef15a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "609a0291fc8ef025d14822f53a2e7d95",
"main.dart.js": "a007c63cfb94f86559d386d416174a67",
"manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"version.json": "9ae9901eb37b4122b822e41cdecef15a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
