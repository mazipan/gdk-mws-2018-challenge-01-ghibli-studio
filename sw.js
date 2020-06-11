importScripts('https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/4e527bbd0cc1f2048d9c.js",
    "revision": "8b2ca2848cd5a0286de33ac180f700f3"
  },
  {
    "url": "https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/7b030d6f9b6e98a5a195.js",
    "revision": "066778e6e5717f72705caae416b71a71"
  },
  {
    "url": "https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/7d4140e12150702bad4e.js",
    "revision": "79cd968cecb98ce86ba8e3ae49dfa473"
  },
  {
    "url": "https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/bb47a0fb06f714b832b1.js",
    "revision": "b98281d776c42b33428a396bf31ea3e3"
  },
  {
    "url": "https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/c403ac8a933c9723b39d.js",
    "revision": "378d0bde99e7c00be4d5671a0d1ecaf6"
  }
], {
  "cacheId": "ghibli-apps",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('https://mazipan.github.io/gdk-mws-2018-challenge-01-ghibli-studio/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
