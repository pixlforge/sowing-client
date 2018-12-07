export const state = () => ({
  products: [],
  meta: {
    is_empty: true
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
  }
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_EMPTY(state, is_empty) {
    state.meta.is_empty = is_empty;
  }
};

export const actions = {
  async getCart({ commit }) {
    let res = await this.$axios.$get(`/cart`);

    commit('SET_PRODUCTS', res.data.products);
    commit('SET_EMPTY', res.meta.is_empty);

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
  }
};