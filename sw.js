importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7b030d6f9b6e98a5a195.js",
    "revision": "066778e6e5717f72705caae416b71a71"
  },
  {
    "url": "/_nuxt/a13df40e88a027585202.js",
    "revision": "9efc75e1d60a2cb9c9f0cdd3cebd1afe"
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
    "url": "/_nuxt/f2f96d06a753a2253b48.js",
    "revision": "d3605cab5474e2eb57d8b75c1122a2ce"
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
