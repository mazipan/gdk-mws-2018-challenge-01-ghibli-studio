const pkg = require('./package')
const title = 'Ghibli Apps'
const publicUrl = 'https://ghibli-apps.netlify.com/'
const iconUrl = `${publicUrl}icon.png`

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { hid: 'theme-color', name: 'theme-color', content: '#00d1b2' },

      { hid: 'og:image', property: 'og:image', content: iconUrl },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: publicUrl },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: iconUrl },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: publicUrl },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
  },
  manifest: {
    name: title,
    short_name: title
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00d1b2',
    height: '3px',
    continuous: true
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
