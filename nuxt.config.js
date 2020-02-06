require('dotenv').config()

export default {
  /*
   ** Node server configuration
   */
  server: {
    port: 3000
  },
  /*
   ** App mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Sowing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [{ src: 'https://js.stripe.com/v3/' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Router configuration
   */
  router: {
    middleware: ['landing-page-redirect']
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
    '~/assets/css/tailwind.scss'
  ],
  /**
   * Web font loader configuration
   */
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,700,800,900']
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-instantsearch'
    // {
    //   src: '~/plugins/mailchimp-analytics',
    //   ssr: false
    // }
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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-131013770-1'
      }
    ],
    [
      'nuxt-i18n',
      {
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
        vuex: {
          syncLocale: true
        },
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr'
        },
        strategy: 'no_prefix',
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
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
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        tokenType: 'bearer'
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
      }
    ]
  },
  /**
   * Toast configuration
   */
  toast: {
    position: 'bottom-right',
    duration: 6000,
    className: ['custom']
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
