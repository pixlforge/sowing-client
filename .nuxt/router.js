import Vue from 'vue'
import Router from 'vue-router'

const _508690ee = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _56a37d54 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _1aee37d8 = () => import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */).then(m => m.default || m)
const _091687d6 = () => import('../pages/password/email.vue' /* webpackChunkName: "pages/password/email" */).then(m => m.default || m)
const _17283845 = () => import('../pages/register/success.vue' /* webpackChunkName: "pages/register/success" */).then(m => m.default || m)
const _03544809 = () => import('../pages/password/reset.vue' /* webpackChunkName: "pages/password/reset" */).then(m => m.default || m)
const _74588e8d = () => import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */).then(m => m.default || m)
const _7e2baf66 = () => import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */).then(m => m.default || m)
const _3dbde985 = () => import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */).then(m => m.default || m)
const _382080c1 = () => import('../pages/categories/_category/_subcategory/_slug.vue' /* webpackChunkName: "pages/categories/_category/_subcategory/_slug" */).then(m => m.default || m)
const _60595394 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/en/login",
			component: _508690ee,
			name: "login___en"
		},
		{
			path: "/fr/login",
			component: _508690ee,
			name: "login___fr"
		},
		{
			path: "/de/login",
			component: _508690ee,
			name: "login___de"
		},
		{
			path: "/it/login",
			component: _508690ee,
			name: "login___it"
		},
		{
			path: "/en/admin",
			component: _56a37d54,
			name: "admin___en"
		},
		{
			path: "/fr/admin",
			component: _56a37d54,
			name: "admin___fr"
		},
		{
			path: "/de/admin",
			component: _56a37d54,
			name: "admin___de"
		},
		{
			path: "/it/admin",
			component: _56a37d54,
			name: "admin___it"
		},
		{
			path: "/en/register",
			component: _1aee37d8,
			name: "register___en"
		},
		{
			path: "/fr/register",
			component: _1aee37d8,
			name: "register___fr"
		},
		{
			path: "/de/register",
			component: _1aee37d8,
			name: "register___de"
		},
		{
			path: "/it/register",
			component: _1aee37d8,
			name: "register___it"
		},
		{
			path: "/en/password/email",
			component: _091687d6,
			name: "password-email___en"
		},
		{
			path: "/fr/password/email",
			component: _091687d6,
			name: "password-email___fr"
		},
		{
			path: "/de/password/email",
			component: _091687d6,
			name: "password-email___de"
		},
		{
			path: "/it/password/email",
			component: _091687d6,
			name: "password-email___it"
		},
		{
			path: "/en/register/success",
			component: _17283845,
			name: "register-success___en"
		},
		{
			path: "/fr/register/success",
			component: _17283845,
			name: "register-success___fr"
		},
		{
			path: "/de/register/success",
			component: _17283845,
			name: "register-success___de"
		},
		{
			path: "/it/register/success",
			component: _17283845,
			name: "register-success___it"
		},
		{
			path: "/en/password/reset",
			component: _03544809,
			name: "password-reset___en"
		},
		{
			path: "/fr/password/reset",
			component: _03544809,
			name: "password-reset___fr"
		},
		{
			path: "/de/password/reset",
			component: _03544809,
			name: "password-reset___de"
		},
		{
			path: "/it/password/reset",
			component: _03544809,
			name: "password-reset___it"
		},
		{
			path: "/en/admin/users",
			component: _74588e8d,
			name: "admin-users___en"
		},
		{
			path: "/fr/admin/users",
			component: _74588e8d,
			name: "admin-users___fr"
		},
		{
			path: "/de/admin/users",
			component: _74588e8d,
			name: "admin-users___de"
		},
		{
			path: "/it/admin/users",
			component: _74588e8d,
			name: "admin-users___it"
		},
		{
			path: "/en/products/:slug?",
			component: _7e2baf66,
			name: "products-slug___en"
		},
		{
			path: "/fr/products/:slug?",
			component: _7e2baf66,
			name: "products-slug___fr"
		},
		{
			path: "/de/products/:slug?",
			component: _7e2baf66,
			name: "products-slug___de"
		},
		{
			path: "/it/products/:slug?",
			component: _7e2baf66,
			name: "products-slug___it"
		},
		{
			path: "/en/categories/:slug?",
			component: _3dbde985,
			name: "categories-slug___en"
		},
		{
			path: "/fr/categories/:slug?",
			component: _3dbde985,
			name: "categories-slug___fr"
		},
		{
			path: "/de/categories/:slug?",
			component: _3dbde985,
			name: "categories-slug___de"
		},
		{
			path: "/it/categories/:slug?",
			component: _3dbde985,
			name: "categories-slug___it"
		},
		{
			path: "/en/categories/:category?/:subcategory?/:slug?",
			component: _382080c1,
			name: "categories-category-subcategory-slug___en"
		},
		{
			path: "/fr/categories/:category?/:subcategory?/:slug?",
			component: _382080c1,
			name: "categories-category-subcategory-slug___fr"
		},
		{
			path: "/de/categories/:category?/:subcategory?/:slug?",
			component: _382080c1,
			name: "categories-category-subcategory-slug___de"
		},
		{
			path: "/it/categories/:category?/:subcategory?/:slug?",
			component: _382080c1,
			name: "categories-category-subcategory-slug___it"
		},
		{
			path: "/en/",
			component: _60595394,
			name: "index___en"
		},
		{
			path: "/fr/",
			component: _60595394,
			name: "index___fr"
		},
		{
			path: "/de/",
			component: _60595394,
			name: "index___de"
		},
		{
			path: "/it/",
			component: _60595394,
			name: "index___it"
		}
    ],
    
    
    fallback: false
  })
}
