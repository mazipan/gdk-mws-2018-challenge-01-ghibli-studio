importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5a814f3f0930a859bb57.js",
    "revision": "9d1cd53a077ece56e7c7c203c44dd9cd"
  },
  {
    "url": "/_nuxt/9747c248d0fe92f6f6ac.js",
    "revision": "dbfd805e9eb33ef608d90890af0ace29"
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
