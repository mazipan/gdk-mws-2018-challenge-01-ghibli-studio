importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00741072b16956b81678.js",
    "revision": "5091c056bfe1b070acff004aca17c43a"
  },
  {
    "url": "/_nuxt/760520f13a689681e304.js",
    "revision": "ffc2148ab0fe8cb5610aa9428414aa96"
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
