'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99999b443bb87aa3f0dc59ef2617bde2",
"assets/AssetManifest.bin.json": "ce47aedbc43587e423549835c5a6f760",
"assets/AssetManifest.json": "089ccfd72d7c3006fb86db4d75e009b8",
"assets/assets/1.gif": "92dbd576d53ceb90307eba0fe021cae8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2aecd193e1314df1bf7eaec651a583f4",
"assets/NOTICES": "6f201d2aa3be7f1017ecf5fc885b9f53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"gooodclass/.git/COMMIT_EDITMSG": "eff5bc1ef8ec9d03e640fc4370f5eacd",
"gooodclass/.git/config": "9e19af4823675cfa5fadbb816a025c0a",
"gooodclass/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gooodclass/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"gooodclass/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gooodclass/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gooodclass/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"gooodclass/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gooodclass/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gooodclass/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"gooodclass/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"gooodclass/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"gooodclass/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gooodclass/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gooodclass/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gooodclass/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"gooodclass/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"gooodclass/.git/index": "109ab10aea74891c6b27d080c5844db1",
"gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/.git/logs/HEAD": "3642c2478f37383648d7208c1ddbdeee",
"gooodclass/.git/logs/refs/heads/main": "3642c2478f37383648d7208c1ddbdeee",
"gooodclass/.git/logs/refs/remotes/origin/HEAD": "9ef657260cfd66722969e61b39e382e3",
"gooodclass/.git/logs/refs/remotes/origin/main": "bf031c8b5e47938946d46b10b8e6d133",
"gooodclass/.git/objects/1f/0734f39c20ec6bc3726cc6d01f7f10bc93fbef": "ba645ba1c046aacb322dcced044cfe5d",
"gooodclass/.git/objects/20/cb80447811443822b5951ca6d1e69730355a51": "60dd063f4b83cff82e5881189d4b1495",
"gooodclass/.git/objects/22/25069bc2473f244699aa9171b30802332537a2": "3c56acad0992008a8f83683e422639c9",
"gooodclass/.git/objects/28/e6884ac5d5575a7259425d8ca66f9d2333c117": "6a9ad32e6fea573eb1dd5150692cf44f",
"gooodclass/.git/objects/2f/fe912217920983eafdb041e385fffe014560ec": "392fcc5886b6b48a0452ee6254426582",
"gooodclass/.git/objects/3a/c2d6645d19a8ef2b8ebee4b99c7c0e245add41": "8705ad704cf8dfd6f9d71b9736f9eace",
"gooodclass/.git/objects/3e/c23a2e6a5900f98ecb51816dbd1bcd46f0aed8": "9fbcd71c0b0b21c97fe62dc54cbe47df",
"gooodclass/.git/objects/47/300a2ab3844dd125cd81988bdc5474f61f929e": "595c75b2ce1e75927923e173c42b131e",
"gooodclass/.git/objects/52/f61236dd5d8d8c27625ed7b6f6aacccacd8856": "12340a587fe646fd48d959f2f492f228",
"gooodclass/.git/objects/57/9303506cfac78cb49fd1756d437f56a39f5812": "9187ab363958632f4c4c649d44a3a77b",
"gooodclass/.git/objects/5c/04b58ca8ee72c50dcbb4aad619080afc038f4f": "fc37ac92945956ea054019d6b138e94a",
"gooodclass/.git/objects/5c/cfe561117e111fa6703f5f5acf2c9cd23c322e": "530436b036ddf950bab3b1533b71e50e",
"gooodclass/.git/objects/7b/3af7987dd7bbf636f8d6a466f92441eccdb5aa": "fdbe567e6499b65623918764565f4cee",
"gooodclass/.git/objects/7d/62ab18b054e8a14de812bbc3c061f5ce179ea7": "e124b33a33008b098d483381d0f67554",
"gooodclass/.git/objects/7d/7fd2f318b4025f5b4caddcef645c5cede7000b": "6a69eef400f869ea9ddfd3681a18a055",
"gooodclass/.git/objects/8b/c07399ce82ca3e068dad2ea86d6f01a12b9327": "a7f05a4815cdbaa2984a43b49829b97d",
"gooodclass/.git/objects/9b/e29bc0c72f01c6d4d495753d17d96949f98bcf": "26289fe5e984612a930b4bdec4d58549",
"gooodclass/.git/objects/a2/0bee21f7bfe7d411ef9ed0238e48aa2b6e2dea": "fcee15d5621555acc2f85eb517b28d5b",
"gooodclass/.git/objects/af/7d8e2e814d164442b18926d2dbdfe27c3903c0": "8b2bc8ed419e9a8205ac3774ef9ffbba",
"gooodclass/.git/objects/b1/2c558e2db1ec0b2270c22555fad15229b8ac1f": "d03314afda858c39230f9e7d8e08abb1",
"gooodclass/.git/objects/b4/33c8e0e698318cebf6175feb3a2afbbae80a9e": "e06946a49d8d139cb31e4b18be70efd4",
"gooodclass/.git/objects/c2/d5092132457ec4f4c47e79d95423b4380b7933": "ec50788afc6c3e9bc872a708a165306f",
"gooodclass/.git/objects/c4/9f7bb03cac0d4078a75d075f7c7990766e83d8": "56e0ce6d63cc9f5823d9925ec514aca0",
"gooodclass/.git/objects/ca/1818933bb4b465a8f60756dc0a2399c5393b00": "9062e5297260c74ab9a7655264f68170",
"gooodclass/.git/objects/ca/b99a91a3b7154dbcaba0436e20addd8968ff9c": "97a42f8f45fdaed185815c9e87c55996",
"gooodclass/.git/objects/ce/d3b671e0bfe8d16682491ed8cf177e4151514d": "da0bab29368e503f58fda0b47a861491",
"gooodclass/.git/objects/cf/4435bc6734fd7302785e347d1320bcf52f599d": "58858fc1df51e58bd8d2e8fb1dd8198b",
"gooodclass/.git/objects/d7/47575dcf20982a759bb6a77daf07b28facca70": "110d04439b71f781bd12159301c5f697",
"gooodclass/.git/objects/e6/7085115b4f087b0a231439688ccd7f8afe1cb9": "8cff2e0591bcc5cf1bb347b215bef9eb",
"gooodclass/.git/objects/ea/5b2f9c0cdfe499d64eab07d055b89a9aad79d1": "5370041366217f217fea35a3503ea7a2",
"gooodclass/.git/objects/eb/74181519950ba14218704944c64edc468602e4": "5a18f806990cdb6bccfb113a87230639",
"gooodclass/.git/objects/f0/218e1b59c0260d9f81a5328dd5187fe45695f9": "8b90c17b901421e5c117183aac74fb84",
"gooodclass/.git/objects/f1/27876b4bce20cc8ab5ea456128d84943646252": "3c2cefb78aa5202e114e712b2549cab0",
"gooodclass/.git/objects/pack/pack-e8ab808d354a469bcbc100bdf5e242e25c66493b.idx": "f3bd845847af999cd11f41caed810f6b",
"gooodclass/.git/objects/pack/pack-e8ab808d354a469bcbc100bdf5e242e25c66493b.pack": "58c7f34d7018d1515bc69d593f560307",
"gooodclass/.git/packed-refs": "5a0d36760c871450414aa94701f64578",
"gooodclass/.git/refs/heads/main": "f6506403ff06570a30ff20e931b20570",
"gooodclass/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gooodclass/.git/refs/remotes/origin/main": "f6506403ff06570a30ff20e931b20570",
"gooodclass/assets/AssetManifest.bin": "99999b443bb87aa3f0dc59ef2617bde2",
"gooodclass/assets/AssetManifest.bin.json": "ce47aedbc43587e423549835c5a6f760",
"gooodclass/assets/AssetManifest.json": "089ccfd72d7c3006fb86db4d75e009b8",
"gooodclass/assets/assets/1.gif": "92dbd576d53ceb90307eba0fe021cae8",
"gooodclass/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"gooodclass/assets/fonts/MaterialIcons-Regular.otf": "2aecd193e1314df1bf7eaec651a583f4",
"gooodclass/assets/NOTICES": "6f201d2aa3be7f1017ecf5fc885b9f53",
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
"gooodclass/index.html": "d248a4f043d13df83b6c658e4ce8d58b",
"/": "1a867886b17586d21136a7793d11bf3d",
"gooodclass/main.dart.js": "451635041e06000b5c74a735c6ba4a08",
"gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/version.json": "90f232077c3b934fc95417a724aa315e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a867886b17586d21136a7793d11bf3d",
"main.dart.js": "243c1a9836c9152529d06632e31f805b",
"manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"version.json": "90f232077c3b934fc95417a724aa315e"};
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
