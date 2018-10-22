import Vue from 'vue'
import Router from 'vue-router'

const _7e2baf66 = () => import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */).then(m => m.default || m)
const _3dbde985 = () => import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */).then(m => m.default || m)
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
