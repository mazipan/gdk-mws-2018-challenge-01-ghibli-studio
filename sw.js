importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04c641c7341c84c7e727.js",
    "revision": "cdc457b2feaa7d170ab47505104b6d60"
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
    "url": "/_nuxt/bd578cd544fa188be17f.js",
    "revision": "a97b136176ee4d616fbfb43cb938ae71"
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
