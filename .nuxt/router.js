import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1285f351 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _6f1852f7 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _508690ee = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _3de5bb56 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _1aee37d8 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _5c4b334e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _4b4fffa7 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _cca6246e = () => interopDefault(import('../pages/account/verify.vue' /* webpackChunkName: "pages/account/verify" */))
const _88e6ee4e = () => interopDefault(import('../pages/password/forgot.vue' /* webpackChunkName: "pages/password/forgot" */))
const _03544809 = () => interopDefault(import('../pages/password/reset.vue' /* webpackChunkName: "pages/password/reset" */))
const _17283845 = () => interopDefault(import('../pages/register/success.vue' /* webpackChunkName: "pages/register/success" */))
const _7432d61c = () => interopDefault(import('../pages/shop/creator/connect.vue' /* webpackChunkName: "pages/shop/creator/connect" */))
const _5f01cd05 = () => interopDefault(import('../pages/shop/creator/customization.vue' /* webpackChunkName: "pages/shop/creator/customization" */))
const _d76a3918 = () => interopDefault(import('../pages/shop/creator/details.vue' /* webpackChunkName: "pages/shop/creator/details" */))
const _1ff7cbc0 = () => interopDefault(import('../pages/shop/creator/done.vue' /* webpackChunkName: "pages/shop/creator/done" */))
const _48777649 = () => interopDefault(import('../pages/shop/creator/name.vue' /* webpackChunkName: "pages/shop/creator/name" */))
const _0d2fa28e = () => interopDefault(import('../pages/shop/creator/terms.vue' /* webpackChunkName: "pages/shop/creator/terms" */))
const _3dbde985 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _7e2baf66 = () => interopDefault(import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _e17ff5dc = () => interopDefault(import('../pages/shop/_slug/details.vue' /* webpackChunkName: "pages/shop/_slug/details" */))
const _382080c1 = () => interopDefault(import('../pages/categories/_category/_subcategory/_slug.vue' /* webpackChunkName: "pages/categories/_category/_subcategory/_slug" */))
const _60595394 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/en/cart",
      component: _1285f351,
      name: "cart___en"
    }, {
      path: "/fr/cart",
      component: _1285f351,
      name: "cart___fr"
    }, {
      path: "/de/cart",
      component: _1285f351,
      name: "cart___de"
    }, {
      path: "/it/cart",
      component: _1285f351,
      name: "cart___it"
    }, {
      path: "/en/checkout",
      component: _6f1852f7,
      name: "checkout___en"
    }, {
      path: "/fr/checkout",
      component: _6f1852f7,
      name: "checkout___fr"
    }, {
      path: "/de/checkout",
      component: _6f1852f7,
      name: "checkout___de"
    }, {
      path: "/it/checkout",
      component: _6f1852f7,
      name: "checkout___it"
    }, {
      path: "/en/login",
      component: _508690ee,
      name: "login___en"
    }, {
      path: "/fr/login",
      component: _508690ee,
      name: "login___fr"
    }, {
      path: "/de/login",
      component: _508690ee,
      name: "login___de"
    }, {
      path: "/it/login",
      component: _508690ee,
      name: "login___it"
    }, {
      path: "/en/orders",
      component: _3de5bb56,
      name: "orders___en"
    }, {
      path: "/fr/orders",
      component: _3de5bb56,
      name: "orders___fr"
    }, {
      path: "/de/orders",
      component: _3de5bb56,
      name: "orders___de"
    }, {
      path: "/it/orders",
      component: _3de5bb56,
      name: "orders___it"
    }, {
      path: "/en/register",
      component: _1aee37d8,
      name: "register___en"
    }, {
      path: "/fr/register",
      component: _1aee37d8,
      name: "register___fr"
    }, {
      path: "/de/register",
      component: _1aee37d8,
      name: "register___de"
    }, {
      path: "/it/register",
      component: _1aee37d8,
      name: "register___it"
    }, {
      path: "/en/search",
      component: _5c4b334e,
      name: "search___en"
    }, {
      path: "/fr/search",
      component: _5c4b334e,
      name: "search___fr"
    }, {
      path: "/de/search",
      component: _5c4b334e,
      name: "search___de"
    }, {
      path: "/it/search",
      component: _5c4b334e,
      name: "search___it"
    }, {
      path: "/en/shop",
      component: _4b4fffa7,
      name: "shop___en"
    }, {
      path: "/fr/shop",
      component: _4b4fffa7,
      name: "shop___fr"
    }, {
      path: "/de/shop",
      component: _4b4fffa7,
      name: "shop___de"
    }, {
      path: "/it/shop",
      component: _4b4fffa7,
      name: "shop___it"
    }, {
      path: "/en/account/verify",
      component: _cca6246e,
      name: "account-verify___en"
    }, {
      path: "/fr/account/verify",
      component: _cca6246e,
      name: "account-verify___fr"
    }, {
      path: "/de/account/verify",
      component: _cca6246e,
      name: "account-verify___de"
    }, {
      path: "/it/account/verify",
      component: _cca6246e,
      name: "account-verify___it"
    }, {
      path: "/en/password/forgot",
      component: _88e6ee4e,
      name: "password-forgot___en"
    }, {
      path: "/fr/password/forgot",
      component: _88e6ee4e,
      name: "password-forgot___fr"
    }, {
      path: "/de/password/forgot",
      component: _88e6ee4e,
      name: "password-forgot___de"
    }, {
      path: "/it/password/forgot",
      component: _88e6ee4e,
      name: "password-forgot___it"
    }, {
      path: "/en/password/reset",
      component: _03544809,
      name: "password-reset___en"
    }, {
      path: "/fr/password/reset",
      component: _03544809,
      name: "password-reset___fr"
    }, {
      path: "/de/password/reset",
      component: _03544809,
      name: "password-reset___de"
    }, {
      path: "/it/password/reset",
      component: _03544809,
      name: "password-reset___it"
    }, {
      path: "/en/register/success",
      component: _17283845,
      name: "register-success___en"
    }, {
      path: "/fr/register/success",
      component: _17283845,
      name: "register-success___fr"
    }, {
      path: "/de/register/success",
      component: _17283845,
      name: "register-success___de"
    }, {
      path: "/it/register/success",
      component: _17283845,
      name: "register-success___it"
    }, {
      path: "/en/shop/creator/connect",
      component: _7432d61c,
      name: "shop-creator-connect___en"
    }, {
      path: "/fr/shop/creator/connect",
      component: _7432d61c,
      name: "shop-creator-connect___fr"
    }, {
      path: "/de/shop/creator/connect",
      component: _7432d61c,
      name: "shop-creator-connect___de"
    }, {
      path: "/it/shop/creator/connect",
      component: _7432d61c,
      name: "shop-creator-connect___it"
    }, {
      path: "/en/shop/creator/customization",
      component: _5f01cd05,
      name: "shop-creator-customization___en"
    }, {
      path: "/fr/shop/creator/customization",
      component: _5f01cd05,
      name: "shop-creator-customization___fr"
    }, {
      path: "/de/shop/creator/customization",
      component: _5f01cd05,
      name: "shop-creator-customization___de"
    }, {
      path: "/it/shop/creator/customization",
      component: _5f01cd05,
      name: "shop-creator-customization___it"
    }, {
      path: "/en/shop/creator/details",
      component: _d76a3918,
      name: "shop-creator-details___en"
    }, {
      path: "/fr/shop/creator/details",
      component: _d76a3918,
      name: "shop-creator-details___fr"
    }, {
      path: "/de/shop/creator/details",
      component: _d76a3918,
      name: "shop-creator-details___de"
    }, {
      path: "/it/shop/creator/details",
      component: _d76a3918,
      name: "shop-creator-details___it"
    }, {
      path: "/en/shop/creator/done",
      component: _1ff7cbc0,
      name: "shop-creator-done___en"
    }, {
      path: "/fr/shop/creator/done",
      component: _1ff7cbc0,
      name: "shop-creator-done___fr"
    }, {
      path: "/de/shop/creator/done",
      component: _1ff7cbc0,
      name: "shop-creator-done___de"
    }, {
      path: "/it/shop/creator/done",
      component: _1ff7cbc0,
      name: "shop-creator-done___it"
    }, {
      path: "/en/shop/creator/name",
      component: _48777649,
      name: "shop-creator-name___en"
    }, {
      path: "/fr/shop/creator/name",
      component: _48777649,
      name: "shop-creator-name___fr"
    }, {
      path: "/de/shop/creator/name",
      component: _48777649,
      name: "shop-creator-name___de"
    }, {
      path: "/it/shop/creator/name",
      component: _48777649,
      name: "shop-creator-name___it"
    }, {
      path: "/en/shop/creator/terms",
      component: _0d2fa28e,
      name: "shop-creator-terms___en"
    }, {
      path: "/fr/shop/creator/terms",
      component: _0d2fa28e,
      name: "shop-creator-terms___fr"
    }, {
      path: "/de/shop/creator/terms",
      component: _0d2fa28e,
      name: "shop-creator-terms___de"
    }, {
      path: "/it/shop/creator/terms",
      component: _0d2fa28e,
      name: "shop-creator-terms___it"
    }, {
      path: "/en/categories/:slug?",
      component: _3dbde985,
      name: "categories-slug___en"
    }, {
      path: "/fr/categories/:slug?",
      component: _3dbde985,
      name: "categories-slug___fr"
    }, {
      path: "/de/categories/:slug?",
      component: _3dbde985,
      name: "categories-slug___de"
    }, {
      path: "/it/categories/:slug?",
      component: _3dbde985,
      name: "categories-slug___it"
    }, {
      path: "/en/products/:slug?",
      component: _7e2baf66,
      name: "products-slug___en"
    }, {
      path: "/fr/products/:slug?",
      component: _7e2baf66,
      name: "products-slug___fr"
    }, {
      path: "/de/products/:slug?",
      component: _7e2baf66,
      name: "products-slug___de"
    }, {
      path: "/it/products/:slug?",
      component: _7e2baf66,
      name: "products-slug___it"
    }, {
      path: "/en/shop/:slug/details",
      component: _e17ff5dc,
      name: "shop-slug-details___en"
    }, {
      path: "/fr/shop/:slug/details",
      component: _e17ff5dc,
      name: "shop-slug-details___fr"
    }, {
      path: "/de/shop/:slug/details",
      component: _e17ff5dc,
      name: "shop-slug-details___de"
    }, {
      path: "/it/shop/:slug/details",
      component: _e17ff5dc,
      name: "shop-slug-details___it"
    }, {
      path: "/en/categories/:category?/:subcategory?/:slug?",
      component: _382080c1,
      name: "categories-category-subcategory-slug___en"
    }, {
      path: "/fr/categories/:category?/:subcategory?/:slug?",
      component: _382080c1,
      name: "categories-category-subcategory-slug___fr"
    }, {
      path: "/de/categories/:category?/:subcategory?/:slug?",
      component: _382080c1,
      name: "categories-category-subcategory-slug___de"
    }, {
      path: "/it/categories/:category?/:subcategory?/:slug?",
      component: _382080c1,
      name: "categories-category-subcategory-slug___it"
    }, {
      path: "/en/",
      component: _60595394,
      name: "index___en"
    }, {
      path: "/fr/",
      component: _60595394,
      name: "index___fr"
    }, {
      path: "/de/",
      component: _60595394,
      name: "index___de"
    }, {
      path: "/it/",
      component: _60595394,
      name: "index___it"
    }],

    fallback: false
  })
}
