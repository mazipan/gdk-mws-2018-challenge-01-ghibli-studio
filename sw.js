importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/15ca6b6b8ce515606d5a.js",
    "revision": "3985774623012c6cc70243b9555e16aa"
  },
  {
    "url": "/_nuxt/67f3eecfeeaaba40414e.js",
    "revision": "4f8063c379fc76693fcedcbab332c03f"
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
