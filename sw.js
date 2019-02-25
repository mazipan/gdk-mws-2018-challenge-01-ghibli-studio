importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/002341357a6024985f4f.js",
    "revision": "78304c4ca629e4b923d55e0ea459883a"
  },
  {
    "url": "/_nuxt/4e844b04577a8efa2150.js",
    "revision": "4e6c8cfea406a31c16b5fb7f4d93104c"
  },
  {
    "url": "/_nuxt/bdc214dcc286cc4b65b2.js",
    "revision": "0218f34c5f2f1198bc57caeb9799748e"
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
