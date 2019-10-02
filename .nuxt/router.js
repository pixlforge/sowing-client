import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _202ee15e = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _61cceef7 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _c8b0dcee = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _51f57edb = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _1f7774ee = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _4d115756 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _3584ffd8 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _3df3fb4e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _0d39ac05 = () => interopDefault(import('../pages/account/addresses/index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _296594f4 = () => interopDefault(import('../pages/account/dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _7f40eceb = () => interopDefault(import('../pages/account/password.vue' /* webpackChunkName: "pages/account/password" */))
const _63ed6e0e = () => interopDefault(import('../pages/account/payment-methods/index.vue' /* webpackChunkName: "pages/account/payment-methods/index" */))
const _fdb118ee = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _e73cec6e = () => interopDefault(import('../pages/account/verify.vue' /* webpackChunkName: "pages/account/verify" */))
const _1f6b6cd9 = () => interopDefault(import('../pages/password/forgot.vue' /* webpackChunkName: "pages/password/forgot" */))
const _13ee37ee = () => interopDefault(import('../pages/password/reset.vue' /* webpackChunkName: "pages/password/reset" */))
const _2f25d445 = () => interopDefault(import('../pages/register/success.vue' /* webpackChunkName: "pages/register/success" */))
const _7c9fc14e = () => interopDefault(import('../pages/account/addresses/create.vue' /* webpackChunkName: "pages/account/addresses/create" */))
const _47fb1bc8 = () => interopDefault(import('../pages/shop/creator/connect.vue' /* webpackChunkName: "pages/shop/creator/connect" */))
const _88a72df6 = () => interopDefault(import('../pages/shop/creator/customization.vue' /* webpackChunkName: "pages/shop/creator/customization" */))
const _07cb0118 = () => interopDefault(import('../pages/shop/creator/details.vue' /* webpackChunkName: "pages/shop/creator/details" */))
const _07adafc0 = () => interopDefault(import('../pages/shop/creator/done.vue' /* webpackChunkName: "pages/shop/creator/done" */))
const _302d5a49 = () => interopDefault(import('../pages/shop/creator/name.vue' /* webpackChunkName: "pages/shop/creator/name" */))
const _086ecab9 = () => interopDefault(import('../pages/shop/creator/terms.vue' /* webpackChunkName: "pages/shop/creator/terms" */))
const _c6f278fa = () => interopDefault(import('../pages/shop/management/dashboard.vue' /* webpackChunkName: "pages/shop/management/dashboard" */))
const _b659241e = () => interopDefault(import('../pages/shop/management/details.vue' /* webpackChunkName: "pages/shop/management/details" */))
const _11c86fb8 = () => interopDefault(import('../pages/shop/management/theme.vue' /* webpackChunkName: "pages/shop/management/theme" */))
const _be4628a6 = () => interopDefault(import('../pages/account/addresses/_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _6af2bba9 = () => interopDefault(import('../pages/account/payment-methods/_id/details.vue' /* webpackChunkName: "pages/account/payment-methods/_id/details" */))
const _e8aea39a = () => interopDefault(import('../pages/account/payment-methods/_id/edit.vue' /* webpackChunkName: "pages/account/payment-methods/_id/edit" */))
const _55bb8585 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _98c27766 = () => interopDefault(import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _c372bddc = () => interopDefault(import('../pages/shop/_slug/details.vue' /* webpackChunkName: "pages/shop/_slug/details" */))
const _669364c1 = () => interopDefault(import('../pages/categories/_category/_subcategory/_slug.vue' /* webpackChunkName: "pages/categories/_category/_subcategory/_slug" */))
const _427590d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/cart",
      component: _202ee15e,
      name: "cart"
    }, {
      path: "/checkout",
      component: _61cceef7,
      name: "checkout"
    }, {
      path: "/coming-soon",
      component: _c8b0dcee,
      name: "coming-soon"
    }, {
      path: "/faq",
      component: _51f57edb,
      name: "faq"
    }, {
      path: "/login",
      component: _1f7774ee,
      name: "login"
    }, {
      path: "/orders",
      component: _4d115756,
      name: "orders"
    }, {
      path: "/register",
      component: _3584ffd8,
      name: "register"
    }, {
      path: "/search",
      component: _3df3fb4e,
      name: "search"
    }, {
      path: "/account/addresses",
      component: _0d39ac05,
      name: "account-addresses"
    }, {
      path: "/account/dashboard",
      component: _296594f4,
      name: "account-dashboard"
    }, {
      path: "/account/password",
      component: _7f40eceb,
      name: "account-password"
    }, {
      path: "/account/payment-methods",
      component: _63ed6e0e,
      name: "account-payment-methods"
    }, {
      path: "/account/profile",
      component: _fdb118ee,
      name: "account-profile"
    }, {
      path: "/account/verify",
      component: _e73cec6e,
      name: "account-verify"
    }, {
      path: "/password/forgot",
      component: _1f6b6cd9,
      name: "password-forgot"
    }, {
      path: "/password/reset",
      component: _13ee37ee,
      name: "password-reset"
    }, {
      path: "/register/success",
      component: _2f25d445,
      name: "register-success"
    }, {
      path: "/account/addresses/create",
      component: _7c9fc14e,
      name: "account-addresses-create"
    }, {
      path: "/shop/creator/connect",
      component: _47fb1bc8,
      name: "shop-creator-connect"
    }, {
      path: "/shop/creator/customization",
      component: _88a72df6,
      name: "shop-creator-customization"
    }, {
      path: "/shop/creator/details",
      component: _07cb0118,
      name: "shop-creator-details"
    }, {
      path: "/shop/creator/done",
      component: _07adafc0,
      name: "shop-creator-done"
    }, {
      path: "/shop/creator/name",
      component: _302d5a49,
      name: "shop-creator-name"
    }, {
      path: "/shop/creator/terms",
      component: _086ecab9,
      name: "shop-creator-terms"
    }, {
      path: "/shop/management/dashboard",
      component: _c6f278fa,
      name: "shop-management-dashboard"
    }, {
      path: "/shop/management/details",
      component: _b659241e,
      name: "shop-management-details"
    }, {
      path: "/shop/management/theme",
      component: _11c86fb8,
      name: "shop-management-theme"
    }, {
      path: "/account/addresses/:id",
      component: _be4628a6,
      name: "account-addresses-id"
    }, {
      path: "/account/payment-methods/:id?/details",
      component: _6af2bba9,
      name: "account-payment-methods-id-details"
    }, {
      path: "/account/payment-methods/:id?/edit",
      component: _e8aea39a,
      name: "account-payment-methods-id-edit"
    }, {
      path: "/categories/:slug?",
      component: _55bb8585,
      name: "categories-slug"
    }, {
      path: "/products/:slug?",
      component: _98c27766,
      name: "products-slug"
    }, {
      path: "/shop/:slug?/details",
      component: _c372bddc,
      name: "shop-slug-details"
    }, {
      path: "/categories/:category?/:subcategory?/:slug?",
      component: _669364c1,
      name: "categories-category-subcategory-slug"
    }, {
      path: "/",
      component: _427590d8,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
