/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/app.js",
    "revision": "ce4b9782d41c8ccf9fc93644718abf9a"
  },
  {
    "url": "build/app/app.1hmlgr8o.js",
    "revision": "1edc47dc506b089234d8a21dfa110aac"
  },
  {
    "url": "build/app/app.czkfgqjw.js",
    "revision": "89b8580717928e3cb9bd8e0de14da017"
  },
  {
    "url": "build/app/vfksdrha.es5.js",
    "revision": "331a7f695ee141409ddfb023f2cae403"
  },
  {
    "url": "build/app/vfksdrha.js",
    "revision": "bef16164e44e40f37b49e981630956df"
  },
  {
    "url": "build/app/vfksdrha.sc.es5.js",
    "revision": "331a7f695ee141409ddfb023f2cae403"
  },
  {
    "url": "build/app/vfksdrha.sc.js",
    "revision": "bef16164e44e40f37b49e981630956df"
  },
  {
    "url": "index.html",
    "revision": "5c0b875b87b9b991a003a2feee11386c"
  },
  {
    "url": "perf.html",
    "revision": "5c6b0fa7eef103db074b11a9916d78a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
