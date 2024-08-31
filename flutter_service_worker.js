'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "41796f5f76bd683e722b70224eb77a3c",
"assets/AssetManifest.bin.json": "5ff9a8de7415a19737ccdc41b19a6165",
"assets/AssetManifest.json": "e70d5d7842c3d581becff20bdcbe0b13",
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
"assets/fonts/MaterialIcons-Regular.otf": "fde7574d2bab720758aebe5e5479eff6",
"assets/NOTICES": "40f31de28e08572d5472bed1d45d4902",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
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
"gooodclass/.git/COMMIT_EDITMSG": "b026324c6904b2a9cb4b88d6d61c81d1",
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
"gooodclass/.git/index": "4830b57349d5bb3ac349855b1e2d73ef",
"gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/.git/logs/HEAD": "3bb77463c558c168a64e35224adf8cfe",
"gooodclass/.git/logs/refs/heads/main": "3bb77463c558c168a64e35224adf8cfe",
"gooodclass/.git/logs/refs/remotes/origin/HEAD": "65eb793b5524b9e00130af972289c05d",
"gooodclass/.git/logs/refs/remotes/origin/main": "d3db6ff191c85f4ffd643c1f0f2b6a3f",
"gooodclass/.git/objects/01/fb004dc4d7785220826f0511ef870236055179": "ca59da8b488ac1d976ddd86bd13c2c2a",
"gooodclass/.git/objects/0b/0f27d4398570c205fbbffcf582db6fc785858d": "00cda2b7972ed84736a4b260b1f268ce",
"gooodclass/.git/objects/1b/f53704644f8668cc25b6acf02288dedb0d02ba": "2857adc4629bdda78957513eb278430b",
"gooodclass/.git/objects/25/71d90a3180c93597556e05029befbdb80a90e1": "d24d66392b8a162e3b55ac788b179783",
"gooodclass/.git/objects/26/6362d83c32f026b1884aa23ea51bf815dcb0bd": "645ced73ef49de63f0f6d3a27382ebcf",
"gooodclass/.git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
"gooodclass/.git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
"gooodclass/.git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
"gooodclass/.git/objects/71/06fade3053ea21bbdf4bc174ceef89d89dd200": "93acbb5f5798cc074208a1b144cd6bb2",
"gooodclass/.git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
"gooodclass/.git/objects/96/ebc99bfb523f76c1f7d94ba70ae0963b4a4df5": "2c72222093683c8f060896cc970d96ab",
"gooodclass/.git/objects/97/8fbf685612c86c5a0eb9885964d3c08f49ecab": "b1452162e655401a89a2a816fe1865fe",
"gooodclass/.git/objects/a5/889f592c23aa8875e2f4ba4ef82a5929a2e501": "af7577c53781b1231e8d3a3bb9565957",
"gooodclass/.git/objects/a8/a8ceff74427e900c236e7103ba03e19db67a41": "9a6ca49434bdcba13d2aaf04ec39f640",
"gooodclass/.git/objects/a9/0786709ef5d96ecebd9844bae1cf4f4648fccf": "49b092b122f61c530b71ca5886058321",
"gooodclass/.git/objects/c0/c54f79867c65bab567d9229ffe0823a0fd546c": "a154aadfc6296a91177a18063cb7eccc",
"gooodclass/.git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
"gooodclass/.git/objects/c7/da38e9d184ab2cf7370b00ff862a6b7dbfc304": "8d12a4698c7705a0d05df0fa38865c24",
"gooodclass/.git/objects/d6/afc1fb534543110f1eeb44bcb9797801e41dd5": "6616318edf970fb8fa78974bf04def97",
"gooodclass/.git/objects/e7/ad8761ff0b6bc2ecc304cd81718bef7cf91087": "d5f657354be3da64c4dcdf50e4732c50",
"gooodclass/.git/objects/pack/pack-77de7cc11e9ad00511c80747d0fe5ae27c1ba0e3.idx": "31cb3547554cb9b6bbc0ebc1aa49623c",
"gooodclass/.git/objects/pack/pack-77de7cc11e9ad00511c80747d0fe5ae27c1ba0e3.pack": "ad0b0678d554c65b9434f07bc9b9d0c7",
"gooodclass/.git/objects/pack/pack-77de7cc11e9ad00511c80747d0fe5ae27c1ba0e3.rev": "17c67870fae8dfc5946a9bda33192c05",
"gooodclass/.git/packed-refs": "c5e042af43c2cc6d2a689d869c7a7814",
"gooodclass/.git/refs/heads/main": "8b09fdc8e6935f6844c4c00d352e490f",
"gooodclass/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gooodclass/.git/refs/remotes/origin/main": "8b09fdc8e6935f6844c4c00d352e490f",
"gooodclass/assets/AssetManifest.bin": "41796f5f76bd683e722b70224eb77a3c",
"gooodclass/assets/AssetManifest.bin.json": "5ff9a8de7415a19737ccdc41b19a6165",
"gooodclass/assets/AssetManifest.json": "e70d5d7842c3d581becff20bdcbe0b13",
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
"gooodclass/assets/fonts/MaterialIcons-Regular.otf": "fde7574d2bab720758aebe5e5479eff6",
"gooodclass/assets/NOTICES": "40f31de28e08572d5472bed1d45d4902",
"gooodclass/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"gooodclass/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
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
"gooodclass/index.html": "45b81fa79aa3434f66402ff671c78f12",
"/": "01f840829741cd970cbf45b4439981d3",
"gooodclass/main.dart.js": "4ffa224371d7e7495416484f882d814d",
"gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/version.json": "dd2627b28992437b1af5781563566d0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01f840829741cd970cbf45b4439981d3",
"main.dart.js": "4ffa224371d7e7495416484f882d814d",
"manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"version.json": "dd2627b28992437b1af5781563566d0a"};
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
