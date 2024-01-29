'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8aeb12a62d95299a7659d2820a47c8ce",
"assets/AssetManifest.bin.json": "3cc3cbf2b5dae8ea862d527b2a44f873",
"assets/AssetManifest.json": "4f87adf97c75542516624b16b01e70ae",
"assets/assets/noclass.gif": "4140f0822835c8c95a93a473e264312b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c77325819e8db772ca2205accc838e1a",
"assets/NOTICES": "29ccac23dcd7e693cd9e1d273f605699",
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
"gooodclass/.git/index": "e35cf36d5a5f4e6c0a626d1519920601",
"gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/.git/logs/HEAD": "bdf17bcf9378e75f9d10f5da3abce02e",
"gooodclass/.git/logs/refs/heads/main": "bdf17bcf9378e75f9d10f5da3abce02e",
"gooodclass/.git/logs/refs/remotes/origin/HEAD": "9ef657260cfd66722969e61b39e382e3",
"gooodclass/.git/logs/refs/remotes/origin/main": "b42d031e3ed802c65f9f92652417e9c2",
"gooodclass/.git/objects/05/8770373b121f448cbcc14ac32b7fd09eef8110": "96f5051916e418c26372d9acb58836b1",
"gooodclass/.git/objects/06/45dd31e37563f4a7d80cd38d1c62b326fde2dd": "773bdc6c219a70366d1b87aaa454fe3d",
"gooodclass/.git/objects/0f/0a63b613212a18529c2c3103aef98ff8e262ad": "9982551040e5fe7a465c46c21991bc97",
"gooodclass/.git/objects/1d/777039e841740d432b8f455b75d53a17754c49": "67d4b9d51ae2726048506241176b2ed8",
"gooodclass/.git/objects/1f/0734f39c20ec6bc3726cc6d01f7f10bc93fbef": "ba645ba1c046aacb322dcced044cfe5d",
"gooodclass/.git/objects/20/cb80447811443822b5951ca6d1e69730355a51": "60dd063f4b83cff82e5881189d4b1495",
"gooodclass/.git/objects/22/25069bc2473f244699aa9171b30802332537a2": "3c56acad0992008a8f83683e422639c9",
"gooodclass/.git/objects/27/b377fb930040e518904abad8f4816f67ddd5d2": "caef87b9a8a1718f788d5f4e6ffa9302",
"gooodclass/.git/objects/28/e6884ac5d5575a7259425d8ca66f9d2333c117": "6a9ad32e6fea573eb1dd5150692cf44f",
"gooodclass/.git/objects/2f/fe912217920983eafdb041e385fffe014560ec": "392fcc5886b6b48a0452ee6254426582",
"gooodclass/.git/objects/3a/c2d6645d19a8ef2b8ebee4b99c7c0e245add41": "8705ad704cf8dfd6f9d71b9736f9eace",
"gooodclass/.git/objects/3e/c23a2e6a5900f98ecb51816dbd1bcd46f0aed8": "9fbcd71c0b0b21c97fe62dc54cbe47df",
"gooodclass/.git/objects/40/03beb23e679636bbd1bf76598f7500119a66cf": "63f5b09460534892a1d77da15bcf41fd",
"gooodclass/.git/objects/47/300a2ab3844dd125cd81988bdc5474f61f929e": "595c75b2ce1e75927923e173c42b131e",
"gooodclass/.git/objects/4c/1a8fd5cf0874c272b17a1cfaeca45b0f85ee1a": "09ccb0b736a75205cd8a8d3fda1b51a1",
"gooodclass/.git/objects/4e/e9fe7de96ed363019b74df9089831ca997a16f": "3d42a6720bea492ae05b9ed617c6cffe",
"gooodclass/.git/objects/50/e4ec0d5a23ca786d30f8e283077ae36a5f5682": "f5acd4b571e66f2335268ca40107c7b5",
"gooodclass/.git/objects/52/561b16621c1297a42c06662ff3625c57dd5ce2": "e39c145d018ac1f1c4c557979aac7c6c",
"gooodclass/.git/objects/52/f61236dd5d8d8c27625ed7b6f6aacccacd8856": "12340a587fe646fd48d959f2f492f228",
"gooodclass/.git/objects/57/9303506cfac78cb49fd1756d437f56a39f5812": "9187ab363958632f4c4c649d44a3a77b",
"gooodclass/.git/objects/5c/04b58ca8ee72c50dcbb4aad619080afc038f4f": "fc37ac92945956ea054019d6b138e94a",
"gooodclass/.git/objects/5c/cfe561117e111fa6703f5f5acf2c9cd23c322e": "530436b036ddf950bab3b1533b71e50e",
"gooodclass/.git/objects/70/712977ed2c40c707a5a03e3d94e7f819293bfe": "05680e52a06392e02c8682bafa8aa540",
"gooodclass/.git/objects/7b/3af7987dd7bbf636f8d6a466f92441eccdb5aa": "fdbe567e6499b65623918764565f4cee",
"gooodclass/.git/objects/7d/62ab18b054e8a14de812bbc3c061f5ce179ea7": "e124b33a33008b098d483381d0f67554",
"gooodclass/.git/objects/7d/7fd2f318b4025f5b4caddcef645c5cede7000b": "6a69eef400f869ea9ddfd3681a18a055",
"gooodclass/.git/objects/81/d69bc7b2f755bf2b34d11f95c10ca814bbfeae": "055bff67e1e72ad0b30fe1ab26dafcda",
"gooodclass/.git/objects/8b/c07399ce82ca3e068dad2ea86d6f01a12b9327": "a7f05a4815cdbaa2984a43b49829b97d",
"gooodclass/.git/objects/9a/995816db8835a23bacda1404467143aa134ecd": "230eac397ea1ecef35e36af3f65e5d61",
"gooodclass/.git/objects/9b/e29bc0c72f01c6d4d495753d17d96949f98bcf": "26289fe5e984612a930b4bdec4d58549",
"gooodclass/.git/objects/a2/0bee21f7bfe7d411ef9ed0238e48aa2b6e2dea": "fcee15d5621555acc2f85eb517b28d5b",
"gooodclass/.git/objects/ac/872c501dc597bc8ce1f4438a91c99caf35c43d": "052cf9cb1cb33783e2d471168b35ca73",
"gooodclass/.git/objects/af/7d8e2e814d164442b18926d2dbdfe27c3903c0": "8b2bc8ed419e9a8205ac3774ef9ffbba",
"gooodclass/.git/objects/b1/2c558e2db1ec0b2270c22555fad15229b8ac1f": "d03314afda858c39230f9e7d8e08abb1",
"gooodclass/.git/objects/b4/33c8e0e698318cebf6175feb3a2afbbae80a9e": "e06946a49d8d139cb31e4b18be70efd4",
"gooodclass/.git/objects/b7/bac848bd1e633e8faa324944cd446e9d83805a": "6de40595dc5248636dbcb107f07a88ff",
"gooodclass/.git/objects/bc/d7a748ed9986d6e0e81b4847365e96f7c42010": "1f172d406e6f92080efe811b5efc05e3",
"gooodclass/.git/objects/c2/d5092132457ec4f4c47e79d95423b4380b7933": "ec50788afc6c3e9bc872a708a165306f",
"gooodclass/.git/objects/c4/9f7bb03cac0d4078a75d075f7c7990766e83d8": "56e0ce6d63cc9f5823d9925ec514aca0",
"gooodclass/.git/objects/c6/f54f607a77e8d0585693d06d14237ed5966cae": "d194adac81ad9cbbb726efc2b3a9d704",
"gooodclass/.git/objects/ca/1818933bb4b465a8f60756dc0a2399c5393b00": "9062e5297260c74ab9a7655264f68170",
"gooodclass/.git/objects/ca/b99a91a3b7154dbcaba0436e20addd8968ff9c": "97a42f8f45fdaed185815c9e87c55996",
"gooodclass/.git/objects/cb/3f1c47f088800b91bc7bdf8d08af612e3d4eaf": "0f7ac79bba3700b1e824fc17f5592906",
"gooodclass/.git/objects/ce/d3b671e0bfe8d16682491ed8cf177e4151514d": "da0bab29368e503f58fda0b47a861491",
"gooodclass/.git/objects/cf/4435bc6734fd7302785e347d1320bcf52f599d": "58858fc1df51e58bd8d2e8fb1dd8198b",
"gooodclass/.git/objects/d7/47575dcf20982a759bb6a77daf07b28facca70": "110d04439b71f781bd12159301c5f697",
"gooodclass/.git/objects/e4/66f9fd3647055fdd0da97ec0a23fda98f8d09b": "f3c6b3fd65bba90cd9db982a3af10d6f",
"gooodclass/.git/objects/e6/7085115b4f087b0a231439688ccd7f8afe1cb9": "8cff2e0591bcc5cf1bb347b215bef9eb",
"gooodclass/.git/objects/ea/5b2f9c0cdfe499d64eab07d055b89a9aad79d1": "5370041366217f217fea35a3503ea7a2",
"gooodclass/.git/objects/eb/74181519950ba14218704944c64edc468602e4": "5a18f806990cdb6bccfb113a87230639",
"gooodclass/.git/objects/ef/a60fbcfa06aee0656d6987786dbb199a06b3ab": "e21f16b885594c7816cd8755eb99eab2",
"gooodclass/.git/objects/f0/218e1b59c0260d9f81a5328dd5187fe45695f9": "8b90c17b901421e5c117183aac74fb84",
"gooodclass/.git/objects/f1/27876b4bce20cc8ab5ea456128d84943646252": "3c2cefb78aa5202e114e712b2549cab0",
"gooodclass/.git/objects/fe/35d4b1af5be3b47023570179ebf35a88d63e7f": "56d36556edc7a5cb59d945a0a12218eb",
"gooodclass/.git/objects/ff/4f74f86e876d13511de58d8adea08335ff7aa9": "630b25f53e7df2cdc3caa5e2ed22b310",
"gooodclass/.git/objects/pack/pack-e8ab808d354a469bcbc100bdf5e242e25c66493b.idx": "f3bd845847af999cd11f41caed810f6b",
"gooodclass/.git/objects/pack/pack-e8ab808d354a469bcbc100bdf5e242e25c66493b.pack": "58c7f34d7018d1515bc69d593f560307",
"gooodclass/.git/packed-refs": "5a0d36760c871450414aa94701f64578",
"gooodclass/.git/refs/heads/main": "337bd4279205f471610a92a71bb9a95b",
"gooodclass/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gooodclass/.git/refs/remotes/origin/main": "337bd4279205f471610a92a71bb9a95b",
"gooodclass/assets/AssetManifest.bin": "8aeb12a62d95299a7659d2820a47c8ce",
"gooodclass/assets/AssetManifest.bin.json": "3cc3cbf2b5dae8ea862d527b2a44f873",
"gooodclass/assets/AssetManifest.json": "4f87adf97c75542516624b16b01e70ae",
"gooodclass/assets/assets/1.gif": "92dbd576d53ceb90307eba0fe021cae8",
"gooodclass/assets/assets/noclass.gif": "4140f0822835c8c95a93a473e264312b",
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
"gooodclass/index.html": "6cbf06ca00492e3089b5808a3c1a57c7",
"/": "9c8de0fc5dff19a4475404b988ba4bd8",
"gooodclass/main.dart.js": "7da63c2b7984e20585ea27c2954da7fa",
"gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/version.json": "68ccd7ee8b9d0a5f5fb2a3c76e4124a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c8de0fc5dff19a4475404b988ba4bd8",
"main.dart.js": "5483a5f68de2001da8e828f8129bf69d",
"manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"version.json": "ce70b5ee0b3d292b8ac6b8824b36a6f7"};
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
