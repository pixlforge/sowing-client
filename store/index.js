export const state = () => ({
  categories: [],
  user: {}
})

export const getters = {
  categories(state) {
    return state.categories
  },
  locale(state) {
    return state.i18n.locale
  },
  userHasShop(state) {
    if (state.auth.user) {
      return state.auth.user.has_shop
    }
  }
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_USER_HAS_SHOP(state, value) {
    state.auth.user.has_shop = value
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const res = await this.$axios.$get('/categories')

    commit('SET_CATEGORIES', res.data)

    if (this.$auth.loggedIn) {
      await dispatch('cart/getCart')
    }
  },
  setUserHasShop({ commit }, value) {
    commit('SET_USER_HAS_SHOP', value)
  }
}
