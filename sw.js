importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05e9d9d90ac37a449f0e.js",
    "revision": "fada7281af3286ae522a2aa8bdff6aea"
  },
  {
    "url": "/_nuxt/7d2152bce3b677ddabf4.js",
    "revision": "e678cfa1c229f82266372ea3be058738"
  },
  {
    "url": "/_nuxt/a13df40e88a027585202.js",
    "revision": "089cc97b5c879696ff83a08bf7f90aae"
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
