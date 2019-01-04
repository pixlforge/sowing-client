export const state = () => ({
  categories: []
});

export const getters = {
  categories(state) {
    return state.categories;
  },
  locale(state) {
    return state.i18n.locale;
  }
};

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    let res = await this.$axios.$get("/categories");

    commit("SET_CATEGORIES", res.data);

    if (this.$auth.loggedIn) {
      await dispatch("cart/getCart");
    }
  }
};
