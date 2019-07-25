import queryString from 'query-string'

export const state = () => ({
  products: [],
  meta: {
    is_empty: true,
    subtotal: {},
    total: {},
    has_changed: false
  },
  shippingMethod: null
})

export const getters = {
  products(state) {
    return state.products
  },

  count(state) {
    return state.products.length
  },

  isEmpty(state) {
    return state.meta.is_empty
  },

  subtotal(state) {
    return state.meta.subtotal
  },

  total(state) {
    return state.meta.total
  },

  hasChanged(state) {
    return state.meta.has_changed
  },

  shippingMethod(state) {
    return state.shippingMethod
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },

  SET_EMPTY(state, isEmpty) {
    state.meta.is_empty = isEmpty
  },

  EMPTY_CART(state) {
    state.products = []
    state.meta.is_empty = true
  },

  SET_SUBTOTAL(state, subtotal) {
    state.meta.subtotal = subtotal
  },

  SET_TOTAL(state, total) {
    state.meta.total = total
  },

  SET_CHANGED(state, hasChanged) {
    state.meta.has_changed = hasChanged
  },

  SET_SHIPPING_METHOD(state, shippingMethod) {
    state.shippingMethod = shippingMethod
  }
}

export const actions = {
  async getCart({ commit, state }) {
    const query = {}

    if (state.shippingMethod) {
      query.shipping_method_id = state.shippingMethod.id
    }

    const res = await this.$axios.$get(`/cart?${queryString.stringify(query)}`)

    commit('SET_PRODUCTS', res.data.products)
    commit('SET_EMPTY', res.meta.is_empty)
    commit('SET_SUBTOTAL', res.meta.subtotal)
    commit('SET_TOTAL', res.meta.total)
    commit('SET_CHANGED', res.meta.has_changed)

    return res
  },

  async destroy({ dispatch }, productId) {
    await this.$axios.$delete(`/cart/${productId}`)

    dispatch('getCart')
  },

  async update({ dispatch }, { productId, quantity }) {
    await this.$axios.$patch(`/cart/${productId}`, {
      quantity
    })

    dispatch('getCart')
  },

  async store({ dispatch }, variations) {
    await this.$axios.$post('/cart', {
      variations
    })

    dispatch('getCart')
  },

  emptyCart({ commit }) {
    commit('EMPTY_CART')
  },

  setShippingMethod({ commit }, shippingMethod) {
    commit('SET_SHIPPING_METHOD', shippingMethod)
  }
}
