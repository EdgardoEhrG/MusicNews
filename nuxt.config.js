const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */

  head: {
    title: 'Music News',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green'},

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/components.js',
    '~plugins/date.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/main.scss'],
    ['@nuxtjs/axios']
  ],

  /*
  ** Axios
  */

  axios: {
    credentials: false
  },

  /*
  ** Env config
  */

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
  ** Env config
  */

  env: {
    baseUrl: process.env.baseUrl || 'https://music-news-cdc05.firebaseio.com',
    fbAPIKey: 'AIzaSyBp4DW1IwR8zwYQQ0lrhMhLrAoZTvzgovY'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
