const pkg = require('./package')
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Sowing",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: [
      'locale-redirect'
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#5FB881',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    '@nuxtjs/toast',
    ['@nuxtjs/dotenv', {}],
    ['@nuxtjs/google-analytics', {
      id: 'UA-131013770-1'
    }],
    [
      'nuxt-i18n', {
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-GB',
            file: 'en-GB.js'
          },
          {
            name: 'Français',
            code: 'fr',
            iso: 'fr-CH',
            file: 'fr-CH.js'
          },
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-CH',
            file: 'de-CH.js'
          },
          {
            name: 'Italiano',
            code: 'it',
            iso: 'it-IT',
            file: 'it-IT.js'
          }
        ],
        strategy: 'prefix',
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
        },
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        }
      }
    ]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL
  },

  /**
   * Auth module configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'meta.token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        tokenType: 'bearer',
      }
    },
    redirect: {
      login: '/auth/login',
      logout: false,
      callback: '/auth/login',
      home: false
    }
  },

  /** 
   * Font Awesome configuration
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/pro-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/pro-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ],
  },

  /**
   * Web font loader configuration
   */
  webfontloader: {
    google: {
      families: ['Nunito:400,600,700,800']
    }
  },

  /**
   * Toasted configuration
   */
  toast: {
    position: 'bottom-right',
    duration: 5000
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
