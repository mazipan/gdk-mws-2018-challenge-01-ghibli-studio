importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e38313b948e8662a417.js",
    "revision": "de39ad244fde16c4978f3b677fe8c110"
  },
  {
    "url": "/_nuxt/3dc8fdaa8735250c41ad.js",
    "revision": "8d6e5514b6182e8dfaa629527bfa88a9"
  },
  {
    "url": "/_nuxt/4e844b04577a8efa2150.js",
    "revision": "4e6c8cfea406a31c16b5fb7f4d93104c"
  },
  {
    "url": "/_nuxt/e59df29224896e2418e7.js",
    "revision": "3306aedea320bda27ba523cce13e9b67"
  },
  {
    "url": "/_nuxt/f15d0e8dfac01bf2b8fb.js",
    "revision": "385faeaa46b2c2400c01a145d06acb79"
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
