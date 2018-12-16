export const state = () => ({
  products: [],
  meta: {
    is_empty: true,
    subtotal: {},
    total: {},
    has_changed: false
  }
});

export const getters = {
  products(state) {
    return state.products;
  },
  count(state) {
    return state.products.length;
  },
  isEmpty(state) {
    return state.meta.is_empty;
  },
  subtotal(state) {
    return state.meta.subtotal;
  },
  total(state) {
    return state.meta.total;
  },
  hasChanged(state) {
    return state.meta.has_changed;
  }
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_EMPTY(state, is_empty) {
    state.meta.is_empty = is_empty;
  },
  EMPTY_CART(state) {
    state.products = [];
    state.meta.is_empty = true;
  },
  SET_SUBTOTAL(state, subtotal) {
    state.meta.subtotal = subtotal;
  },
  SET_TOTAL(state, total) {
    state.meta.total = total;
  },
  SET_CHANGED(state, has_changed) {
    state.meta.has_changed = has_changed;
  },
};

export const actions = {
  async getCart({ commit }) {
    let res = await this.$axios.$get(`/cart`);

    commit('SET_PRODUCTS', res.data.products);
    commit('SET_EMPTY', res.meta.is_empty);
    commit('SET_SUBTOTAL', res.meta.subtotal);
    commit('SET_TOTAL', res.meta.total);
    commit('SET_CHANGED', res.meta.has_changed);

    return res;
  },

  async destroy({ dispatch }, productId) {
    await this.$axios.$delete(`/cart/${productId}`);

    dispatch('getCart');
  },

  async update({ dispatch }, { productId, quantity }) {
    await this.$axios.$patch(`/cart/${productId}`, {
      quantity
    });

    dispatch('getCart');
  },

  async store({ dispatch }, variations) {
    await this.$axios.$post('/cart', {
      variations
    });

    dispatch('getCart');
  },

  emptyCart({ commit }) {
    commit('EMPTY_CART');
  }
};