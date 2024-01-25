'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9acb0249dc70d3bbca9dba1568e72772",
"assets/NOTICES": "1d69d606c6c9339edb46598f4dd2c41d",
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
"gooodclass/gooodclass/.git/COMMIT_EDITMSG": "e29311f6f1bf1af907f9ef9f44b8328b",
"gooodclass/gooodclass/.git/config": "9e19af4823675cfa5fadbb816a025c0a",
"gooodclass/gooodclass/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gooodclass/gooodclass/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"gooodclass/gooodclass/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gooodclass/gooodclass/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gooodclass/gooodclass/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"gooodclass/gooodclass/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gooodclass/gooodclass/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gooodclass/gooodclass/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"gooodclass/gooodclass/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"gooodclass/gooodclass/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"gooodclass/gooodclass/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gooodclass/gooodclass/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gooodclass/gooodclass/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gooodclass/gooodclass/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"gooodclass/gooodclass/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"gooodclass/gooodclass/.git/index": "a957811d8a7e29bd7a6299b93c5d4e11",
"gooodclass/gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/gooodclass/.git/logs/HEAD": "ca230c26a33c4f0a879535c2436b7e40",
"gooodclass/gooodclass/.git/logs/refs/heads/main": "ca230c26a33c4f0a879535c2436b7e40",
"gooodclass/gooodclass/.git/logs/refs/remotes/origin/main": "82fc464852be56ebe593084f0d2ba496",
"gooodclass/gooodclass/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"gooodclass/gooodclass/.git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
"gooodclass/gooodclass/.git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
"gooodclass/gooodclass/.git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
"gooodclass/gooodclass/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"gooodclass/gooodclass/.git/objects/20/b239a9c738c09d280966384ada76b9bb7efabe": "a7bc26ada3e3d25575662c7a94d53ad9",
"gooodclass/gooodclass/.git/objects/23/e5707d60963d0caf7ef18c494502374223d74e": "e53eb86b93da107793bd5525c1d064e3",
"gooodclass/gooodclass/.git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
"gooodclass/gooodclass/.git/objects/39/6dd860f2ac1cfd5d308d00a93c28a75ea4af24": "fc0ec4773a75d68144c83aab8b8e7308",
"gooodclass/gooodclass/.git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
"gooodclass/gooodclass/.git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
"gooodclass/gooodclass/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"gooodclass/gooodclass/.git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
"gooodclass/gooodclass/.git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
"gooodclass/gooodclass/.git/objects/51/6f3938d971f82d381efb42d2bdc45ffa7135c9": "582cf64dc290a27abb1e13161675ae80",
"gooodclass/gooodclass/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"gooodclass/gooodclass/.git/objects/54/41e9df2492e6d0ac2236f74388f6c10047b320": "e68d539bd58858c23e1476776fa1ca98",
"gooodclass/gooodclass/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"gooodclass/gooodclass/.git/objects/6f/0252bb40dc5fffca7132345f23036c4a1e09b5": "932555056a9e3ceef928d604ce9d3d05",
"gooodclass/gooodclass/.git/objects/75/f721aaa8986597e99249531f9e63b8e48d877a": "31e85fc570e25b67608cda4e031c5c80",
"gooodclass/gooodclass/.git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
"gooodclass/gooodclass/.git/objects/83/c20a4707a25b095b0ea88476637124ee773599": "731eb3adad2ca856c51f96220e428b20",
"gooodclass/gooodclass/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"gooodclass/gooodclass/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"gooodclass/gooodclass/.git/objects/8b/38f97c21f72d09548a4df85eeb739207d9eb0a": "64393f2555a3e67c407b41dc808e0a95",
"gooodclass/gooodclass/.git/objects/8b/4af4048ce12eca7815a81b355aaf03b96bf410": "2b1dae51016ff25051ebbe3aac893dbc",
"gooodclass/gooodclass/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"gooodclass/gooodclass/.git/objects/91/3f02a17994d7d7b0d21c991660ac534a3a1139": "fe9874c04c4c3bd90fc1a6ee0c84693e",
"gooodclass/gooodclass/.git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
"gooodclass/gooodclass/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"gooodclass/gooodclass/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"gooodclass/gooodclass/.git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
"gooodclass/gooodclass/.git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
"gooodclass/gooodclass/.git/objects/c9/519caa5778bb00d614a76dcc45e897d5808136": "e607f71614e383f23bbad61814cf4ece",
"gooodclass/gooodclass/.git/objects/cd/38e321798cb12a9aade70b74ec53ef05846635": "fc4c2b80bf894889784f21cdb8f1a845",
"gooodclass/gooodclass/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"gooodclass/gooodclass/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"gooodclass/gooodclass/.git/objects/db/dff961401b579b327ab4da44d0e723e625f1f6": "9725324d24b08c07506f3931f8f5cac6",
"gooodclass/gooodclass/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"gooodclass/gooodclass/.git/objects/e6/37c4a3023a5917fd587e0685498908bde6a095": "9f980d1528b41f5c2e274d8239de1016",
"gooodclass/gooodclass/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"gooodclass/gooodclass/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"gooodclass/gooodclass/.git/objects/ff/1a90c7b97a299266ab54199610a278caf841ea": "ab7213780c5cecfd14a15438a4c3f7c7",
"gooodclass/gooodclass/.git/refs/heads/main": "257af38f81f2ef3860324b580b0d9b9f",
"gooodclass/gooodclass/.git/refs/remotes/origin/main": "257af38f81f2ef3860324b580b0d9b9f",
"gooodclass/gooodclass/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"gooodclass/gooodclass/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"gooodclass/gooodclass/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"gooodclass/gooodclass/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"gooodclass/gooodclass/assets/fonts/MaterialIcons-Regular.otf": "9acb0249dc70d3bbca9dba1568e72772",
"gooodclass/gooodclass/assets/NOTICES": "1d69d606c6c9339edb46598f4dd2c41d",
"gooodclass/gooodclass/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"gooodclass/gooodclass/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"gooodclass/gooodclass/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"gooodclass/gooodclass/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"gooodclass/gooodclass/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"gooodclass/gooodclass/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"gooodclass/gooodclass/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"gooodclass/gooodclass/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"gooodclass/gooodclass/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"gooodclass/gooodclass/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gooodclass/gooodclass/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"gooodclass/gooodclass/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"gooodclass/gooodclass/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"gooodclass/gooodclass/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"gooodclass/gooodclass/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"gooodclass/gooodclass/index.html": "e50095af6f90ee4ab45f83f82397b4ce",
"/": "2f51d2dc7145a1f2f1a3679298cf47be",
"gooodclass/gooodclass/main.dart.js": "db4e1bce594b5931bf5deaee62a7b2a6",
"gooodclass/gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/gooodclass/version.json": "4b987bb1bd5f79bf753a17ef97c20bac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f51d2dc7145a1f2f1a3679298cf47be",
"main.dart.js": "5b04da628911f3b08ba82f14a1859a0a",
"manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"version.json": "4b987bb1bd5f79bf753a17ef97c20bac"};
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
