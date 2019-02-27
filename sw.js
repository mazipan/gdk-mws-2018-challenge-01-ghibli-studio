importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/42ab4ccde1ebdc3f422a.js",
    "revision": "ab78f312038d0cab35baa075204a07af"
  },
  {
    "url": "/_nuxt/6ca024707b946e358bfb.js",
    "revision": "00868dea7bc1df192d56414a54bab20c"
  },
  {
    "url": "/_nuxt/bb47a0fb06f714b832b1.js",
    "revision": "b98281d776c42b33428a396bf31ea3e3"
  },
  {
    "url": "/_nuxt/c403ac8a933c9723b39d.js",
    "revision": "378d0bde99e7c00be4d5671a0d1ecaf6"
  },
  {
    "url": "/_nuxt/ea22d32a99d35fef4f2b.js",
    "revision": "07099f7e1180a885379778ad72112e56"
  }
], {
  "cacheId": "ghibli-apps",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
