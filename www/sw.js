importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "build/app.js",
    "revision": "1105e098f886503da0c89a7c808de176"
  },
  {
    "url": "build/app/app.djni4tu0.js",
    "revision": "42656f7bf30deaba5e8aac63f6615157"
  },
  {
    "url": "build/app/app.micujdsn.js",
    "revision": "f36c06c767fb8e16a64ceb957d69355f"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "dc031d06c32d29d5a3502793785f3976"
  },
  {
    "url": "build/app/fdyiqxdn.js",
    "revision": "05d8b7d07e973ac01c7137821238a3d4"
  },
  {
    "url": "build/app/lgokcbhz.js",
    "revision": "4fccf2bfdbb711e5b811a58f2889c7be"
  },
  {
    "url": "index.html",
    "revision": "ca60d1f4aa2d244f46e5ea0a047d4079"
  },
  {
    "url": "perf.html",
    "revision": "cd2442a0609d1fdc19ddc547e2547347"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
