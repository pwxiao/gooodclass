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
"assets/fonts/MaterialIcons-Regular.otf": "54a79c0297ffe58dc2b5a7e172c02b49",
"assets/NOTICES": "d71b06626cd71249ca2d1d1673b3cfe7",
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
"gooodclass/.git/COMMIT_EDITMSG": "e29311f6f1bf1af907f9ef9f44b8328b",
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
"gooodclass/.git/index": "cf6474c866dd78c4a9799c47a2b898a8",
"gooodclass/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gooodclass/.git/logs/HEAD": "47ac296a6a9d56b4d26be205f6b87ef2",
"gooodclass/.git/logs/refs/heads/main": "47ac296a6a9d56b4d26be205f6b87ef2",
"gooodclass/.git/logs/refs/remotes/origin/HEAD": "184c61959ea9cd9831bd20ecf3cbd95c",
"gooodclass/.git/logs/refs/remotes/origin/main": "2cd7816f231deb744bd5460f66a299f2",
"gooodclass/.git/objects/05/0b781cf6975dbeefec784cae15d737f2d7ebec": "983fb7c9eda701c99898c20fea2ea40f",
"gooodclass/.git/objects/07/5cc02a0b917d0dc11d4bae7468ad089888476f": "6417d23502c4f476098978431d30499b",
"gooodclass/.git/objects/09/032569f0b8409769ec761f80beda6741a90dce": "0c19fa7c0401819a1fa24886f0f04906",
"gooodclass/.git/objects/0a/f168c99746031ea4125754a0091ac59d30eeb9": "6c9e2483678d22dbfcfd38329db155f8",
"gooodclass/.git/objects/11/599a67803155e557917087f38d2b090c6a0b84": "6772264accd1a1f6ed02cb8996ec257e",
"gooodclass/.git/objects/11/978039bbbc7b3fcb5be87f70fc910d9c66b441": "835db4ddd9797c6fa40f865aa2bc219e",
"gooodclass/.git/objects/13/a0e2f39dbf62b6aec816d2941599af3c893d2f": "89218c1c8b3491f90f3be70de13d9f7f",
"gooodclass/.git/objects/13/b16bcf19a878a8fd1dbd53039fa90f10d19b43": "f7ecff541447d94d92a94a7764757aa3",
"gooodclass/.git/objects/18/8d4bb449ea08b679aa615f6c3fa4ebcde21ae5": "338860748852c401af72756040dafdeb",
"gooodclass/.git/objects/1c/5c1460b3d7faaa02b07b658b04fde36057203d": "62ed12b913eac7817fed90a081be19f1",
"gooodclass/.git/objects/1f/2a46afe4f3cdb2d312372269648e02346610d9": "c37f7d0b0d44fb0f2856f3c3ba6a90c5",
"gooodclass/.git/objects/24/d1091b6ddd9811f6b67a9e278a9a06585d72dc": "7664c58fa7ff9040460da44d06f0324b",
"gooodclass/.git/objects/26/3f3ac4b797ce496f99bb4876f867a39c9be850": "a4f1a3f1b9c8b680deff0944963a1651",
"gooodclass/.git/objects/26/aa11e4e6a9cf937a235df89f88a8b199686b12": "99f972812fe97ea2611a90d1e2045423",
"gooodclass/.git/objects/27/4b17213c6abd8e90c3fce29d7fd1c439421c2b": "853c1c942a24c379d686f003a3e1fcd7",
"gooodclass/.git/objects/2a/cbd90ab84bfd3df0b3995f009423d99b3c243b": "82392f5b22da57540e6710475101578f",
"gooodclass/.git/objects/2c/46c1f20402cb20bfe71f25fc573b24a74e66ea": "7b389d72ae8ea4ca0475697490833967",
"gooodclass/.git/objects/2e/eb2334ea9f96006977a7cf47af1a152f41ca8c": "8ae0ff4fd948a3a91a53bfd29dbf6461",
"gooodclass/.git/objects/30/4fab420d5cce480626f728a1a5c135b1cedfc0": "0040ba8a003d067fbe9a54fddfc1f159",
"gooodclass/.git/objects/35/bd25b8f08d439e6f01b6d2b1e618d871fe2737": "5293f9dc6ffcbc81569ff145afc4eab0",
"gooodclass/.git/objects/36/20e3111c95314a80968805152e12160fc0efa3": "5cbd4c8689ae6c40c19133377f7b5415",
"gooodclass/.git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
"gooodclass/.git/objects/3a/e3b2834070717521359dadda97f2570294236a": "9ed2cccd363498b03891f74f18a5563d",
"gooodclass/.git/objects/42/8547f383637b89bfd9fe533fabb1c9f212fd8a": "2774a03ed559c8910939da0491f52a7c",
"gooodclass/.git/objects/43/0e2d2eaa502c0f310cfb42ed8ec03fa912c45e": "5bb816259e2e2d174bff33e103ffa017",
"gooodclass/.git/objects/44/4be8f7a6ee21a60633187a5acac342f6db89d3": "423cebe6ea6571aea7ba5ac6b930463a",
"gooodclass/.git/objects/50/7ac80934066405506d891f047ca7311a24257d": "a61dd6376bc9dc31428223c3fc687e86",
"gooodclass/.git/objects/53/922741b927dc0bd6ec4da02f81a164356838e3": "765a7120e1c767ce96d7459b15179a49",
"gooodclass/.git/objects/53/c95ae25f9840bbca0983bf6c018fdd0bffb034": "136e4e66ec9837296f459411ecf8c68f",
"gooodclass/.git/objects/54/7e98862dadbae2c1f87259a826be19486ae495": "aeac62a243a85447cff55581a6cf80d4",
"gooodclass/.git/objects/62/2136b03596ef23e183c5fda7f66fef427772e2": "15d93c35797f686f1589caecce4e6913",
"gooodclass/.git/objects/62/c135cf27c1d4c845696a5830f82cf7d3eb4f1f": "1774aa6d50ccddd193c3b29f36c0e96d",
"gooodclass/.git/objects/64/a837778cc382f2df9dec97cc4ac8aa7ed1848a": "5ebeb8279282573e4a65549d2dbbb0a4",
"gooodclass/.git/objects/6e/41b262f1434aebf883ab076449782a60fedb16": "d091b7d7825c81be5f4318d55816cc32",
"gooodclass/.git/objects/74/b5849e76a2af01d0194da486788fdf1b4be08d": "d40374dc243581e226a0259f980eb1ca",
"gooodclass/.git/objects/7a/089a01bd1faebb8e799b9c8cee713fd7cb3822": "2c7107c73606e76e046d3abbc3317155",
"gooodclass/.git/objects/81/76ef12f22799c5e380af56256be9a49a8cc36a": "9069edb6e51f52e4e2f25fc6c7c52710",
"gooodclass/.git/objects/83/4ce91377ca228e054a6f2fbb56fd023706fef1": "b931d15654877d0da9f87609ec40e278",
"gooodclass/.git/objects/83/b16c3d2636dcf4bdd33ad18d6a5fbddf8e4494": "a96ed225650cebfa1b0c7218a494e421",
"gooodclass/.git/objects/86/9ed13a7835232e7118196b1c5cea8bec905530": "20e4a8ccbf2a25f95432175e5aea4122",
"gooodclass/.git/objects/86/f7d25a39966940ab9782f8948316ee81a6b1e8": "f8e8d9a0f97051786fc4ac148e5c7dcf",
"gooodclass/.git/objects/87/86813092c5923e1d81a08340241b6c390e9c91": "c344b9d0fe28a38827880273b35cbae2",
"gooodclass/.git/objects/89/fcf4226c6483e36d74b7e237edb3c4589fbab6": "01e875e27ba085e5d1db1f91be39bcc3",
"gooodclass/.git/objects/99/134b83856086268ffc0972a891386c2143deda": "13e63c90f20dfb042ee84559cf361dac",
"gooodclass/.git/objects/9b/6c9790ea853330d7f361a5c003a4b57a13a1c4": "02b7cea8e97795de749a7cf1ead05854",
"gooodclass/.git/objects/a0/15c2fc0997c2cf0dc5a61db460d3bff663ac01": "b723693198accb4602c42478d3a0c6af",
"gooodclass/.git/objects/a5/f3c3c18f9cb7cbecfd6796e83a64210c1dc4b0": "f8a6fc5452c65447f7639dcc031c1739",
"gooodclass/.git/objects/ac/7414400a86b4004807e298d5b0a86ac91481d2": "88ec2527ea8a066bfd185d92f188ac1d",
"gooodclass/.git/objects/bc/81203cc5bcd10443398738d591d916b87c0d40": "4a280bace5042bec318048817fac582e",
"gooodclass/.git/objects/c3/00068f410596bd5e21da068c77555b061ea61c": "edfaef70fcdf9b7163ef2116f83b25db",
"gooodclass/.git/objects/c3/97fe75eb052a081c5bc817d575cf3b8174a8bf": "3637e9750af702cd8578a578e92ca39f",
"gooodclass/.git/objects/c7/e0c74251f37987e5b096eea70b2cd350c09c0e": "2772af61031f681910e49f68ad545ec3",
"gooodclass/.git/objects/d3/41086acd109a9c40264b92f2fe6f47ccfa56c5": "752ad82d52b2efb1c74b617997c0f140",
"gooodclass/.git/objects/db/c9a68c815aba9f3dfb637fa8ca0d89fc7c2084": "4efabc214b59ae542a7080e7b48b0783",
"gooodclass/.git/objects/dd/1a6b60b67617df0962992d10017063cd6b2f2c": "2abe7eb5ccdea347e3c0bdc65f59c952",
"gooodclass/.git/objects/e0/448da3956bfa37dfff41a2ea9d9302f193848c": "fdee8eb26d4bfca33d556e2c534c7a06",
"gooodclass/.git/objects/e5/1f86ec9029b19e308ac9366b0c0f1f6e5da4f6": "55ba13324b8b34d843d592234a69ba93",
"gooodclass/.git/objects/ea/e934897f82bd020e858b9e22df78bc988756c7": "04a29c4d44024636b15a0cbd64f0492c",
"gooodclass/.git/objects/f6/44318dc807782bf6fcd771a472867f6e20554e": "d1d7ed258bd496c5b735dcb02b4a1e28",
"gooodclass/.git/objects/fb/6e9678c89d367e4898d49b51542627dfa4e899": "aa8315d2e5d265d6b27100d2a024ef97",
"gooodclass/.git/objects/fb/f7b928166c1bea63b9201c5f2e2817fbe258d5": "566fac3721a0a57d48b343fcf981deeb",
"gooodclass/.git/objects/fc/c1e211b54650f75437d961549e84213248747c": "b926235c1afa45ed92083f9ac4087ce9",
"gooodclass/.git/objects/ff/e174ea417cdc4a4ae683d3bd65426d4ff6da2d": "808f0f1624ef3e24b7a0f8f6b9278a81",
"gooodclass/.git/objects/pack/pack-f4dd3f06692ce2a8f355d690607b73ef01a4e1d7.idx": "b14c7ed70029906a72bc528994c0be31",
"gooodclass/.git/objects/pack/pack-f4dd3f06692ce2a8f355d690607b73ef01a4e1d7.pack": "2e7361e7629f66e826a5cff4a8c846f9",
"gooodclass/.git/packed-refs": "4aac0571572fbd95d97d3cd50c9bbfb0",
"gooodclass/.git/refs/heads/main": "6c3075608086c5a0e4ecdb5502a21c10",
"gooodclass/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gooodclass/.git/refs/remotes/origin/main": "6c3075608086c5a0e4ecdb5502a21c10",
"gooodclass/assets/AssetManifest.bin": "9b3102d21b27b586b4510d42382b8e6a",
"gooodclass/assets/AssetManifest.bin.json": "d4b673d76df9a7617a522e7dbdfe9497",
"gooodclass/assets/AssetManifest.json": "1fe862b9a54cdfcb383eee5e8a56d6d7",
"gooodclass/assets/assets/1.gif": "92dbd576d53ceb90307eba0fe021cae8",
"gooodclass/assets/assets/login.png": "ae311cd16f70b83b1e849b9fae2ba645",
"gooodclass/assets/assets/noclass.gif": "4140f0822835c8c95a93a473e264312b",
"gooodclass/assets/assets/over.png": "208c3a715d37ba2fa35e96c1f9494d0d",
"gooodclass/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"gooodclass/assets/fonts/MaterialIcons-Regular.otf": "5c66b961e55156ea1ce824c2b5fb0bcb",
"gooodclass/assets/NOTICES": "d71b06626cd71249ca2d1d1673b3cfe7",
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
"gooodclass/index.html": "efe90be96197fe098b2c5117288e2dd8",
"/": "3f67f5beabdff49df664dbfdbd1c2eda",
"gooodclass/main.dart.js": "79f03b005791eb31e9aae95087b10e07",
"gooodclass/manifest.json": "df870735e41d120eb5c51a00ca4c4aa4",
"gooodclass/version.json": "798d5ebff9a9ee4e979420cce2bec757",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f67f5beabdff49df664dbfdbd1c2eda",
"main.dart.js": "3794c45e5c14199a0229a91bc9032379",
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
