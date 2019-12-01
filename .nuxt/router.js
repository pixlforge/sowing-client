import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a61419c = () => interopDefault(import('../pages/advice-to-creators.vue' /* webpackChunkName: "pages/advice-to-creators" */))
const _202ee15e = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _61cceef7 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _c8b0dcee = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _6d001a58 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _4d115756 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _3df3fb4e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _0d39ac05 = () => interopDefault(import('../pages/account/addresses/index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _296594f4 = () => interopDefault(import('../pages/account/dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _7f40eceb = () => interopDefault(import('../pages/account/password.vue' /* webpackChunkName: "pages/account/password" */))
const _63ed6e0e = () => interopDefault(import('../pages/account/payment-methods/index.vue' /* webpackChunkName: "pages/account/payment-methods/index" */))
const _fdb118ee = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _435bb4ac = () => interopDefault(import('../pages/auth/forgot.vue' /* webpackChunkName: "pages/auth/forgot" */))
const _a687ea20 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _0d0de7ec = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _05f6ec22 = () => interopDefault(import('../pages/auth/register-success.vue' /* webpackChunkName: "pages/auth/register-success" */))
const _e8525454 = () => interopDefault(import('../pages/auth/reset.vue' /* webpackChunkName: "pages/auth/reset" */))
const _17fdbf02 = () => interopDefault(import('../pages/auth/verify.vue' /* webpackChunkName: "pages/auth/verify" */))
const _7c9fc14e = () => interopDefault(import('../pages/account/addresses/create.vue' /* webpackChunkName: "pages/account/addresses/create" */))
const _41749e70 = () => interopDefault(import('../pages/account/payment-methods/create.vue' /* webpackChunkName: "pages/account/payment-methods/create" */))
const _47fb1bc8 = () => interopDefault(import('../pages/shop/creator/connect.vue' /* webpackChunkName: "pages/shop/creator/connect" */))
const _88a72df6 = () => interopDefault(import('../pages/shop/creator/customization.vue' /* webpackChunkName: "pages/shop/creator/customization" */))
const _07cb0118 = () => interopDefault(import('../pages/shop/creator/details.vue' /* webpackChunkName: "pages/shop/creator/details" */))
const _07adafc0 = () => interopDefault(import('../pages/shop/creator/done.vue' /* webpackChunkName: "pages/shop/creator/done" */))
const _302d5a49 = () => interopDefault(import('../pages/shop/creator/name.vue' /* webpackChunkName: "pages/shop/creator/name" */))
const _086ecab9 = () => interopDefault(import('../pages/shop/creator/terms.vue' /* webpackChunkName: "pages/shop/creator/terms" */))
const _c6f278fa = () => interopDefault(import('../pages/shop/management/dashboard.vue' /* webpackChunkName: "pages/shop/management/dashboard" */))
const _b659241e = () => interopDefault(import('../pages/shop/management/details.vue' /* webpackChunkName: "pages/shop/management/details" */))
const _25845988 = () => interopDefault(import('../pages/shop/management/products/index.vue' /* webpackChunkName: "pages/shop/management/products/index" */))
const _11c86fb8 = () => interopDefault(import('../pages/shop/management/theme.vue' /* webpackChunkName: "pages/shop/management/theme" */))
const _0ab7f487 = () => interopDefault(import('../pages/shop/management/products/create/product/category.vue' /* webpackChunkName: "pages/shop/management/products/create/product/category" */))
const _5656c414 = () => interopDefault(import('../pages/shop/management/products/create/product/name.vue' /* webpackChunkName: "pages/shop/management/products/create/product/name" */))
const _a23b5de0 = () => interopDefault(import('../pages/shop/management/products/create/product/price.vue' /* webpackChunkName: "pages/shop/management/products/create/product/price" */))
const _5cff3740 = () => interopDefault(import('../pages/account/addresses/_id/details.vue' /* webpackChunkName: "pages/account/addresses/_id/details" */))
const _29f0ce48 = () => interopDefault(import('../pages/account/addresses/_id/edit.vue' /* webpackChunkName: "pages/account/addresses/_id/edit" */))
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
    path: "/advice-to-creators",
    component: _0a61419c,
    name: "advice-to-creators"
  }, {
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
    component: _6d001a58,
    name: "faq"
  }, {
    path: "/orders",
    component: _4d115756,
    name: "orders"
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
    path: "/auth/forgot",
    component: _435bb4ac,
    name: "auth-forgot"
  }, {
    path: "/auth/login",
    component: _a687ea20,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _0d0de7ec,
    name: "auth-register"
  }, {
    path: "/auth/register-success",
    component: _05f6ec22,
    name: "auth-register-success"
  }, {
    path: "/auth/reset",
    component: _e8525454,
    name: "auth-reset"
  }, {
    path: "/auth/verify",
    component: _17fdbf02,
    name: "auth-verify"
  }, {
    path: "/account/addresses/create",
    component: _7c9fc14e,
    name: "account-addresses-create"
  }, {
    path: "/account/payment-methods/create",
    component: _41749e70,
    name: "account-payment-methods-create"
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
    path: "/shop/management/products",
    component: _25845988,
    name: "shop-management-products"
  }, {
    path: "/shop/management/theme",
    component: _11c86fb8,
    name: "shop-management-theme"
  }, {
    path: "/shop/management/products/create/product/category",
    component: _0ab7f487,
    name: "shop-management-products-create-product-category"
  }, {
    path: "/shop/management/products/create/product/name",
    component: _5656c414,
    name: "shop-management-products-create-product-name"
  }, {
    path: "/shop/management/products/create/product/price",
    component: _a23b5de0,
    name: "shop-management-products-create-product-price"
  }, {
    path: "/account/addresses/:id/details",
    component: _5cff3740,
    name: "account-addresses-id-details"
  }, {
    path: "/account/addresses/:id/edit",
    component: _29f0ce48,
    name: "account-addresses-id-edit"
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

export function createRouter () {
  return new Router(routerOptions)
}
