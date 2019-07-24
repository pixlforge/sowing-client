const initialState = {
  terms: false,
  step_name: false,
  step_details: false,
  step_customization: false,
  step_connect: false,
  shop: {
    name: '',
    description_short: {
      en: '',
      fr: '',
      de: '',
      it: ''
    },
    description_long: {
      en: '',
      fr: '',
      de: '',
      it: ''
    },
    theme: 'green',
    postal_code: '',
    city: '',
    country_id: '',
    stripe_user_id: '',
    stripe_publishable_key: '',
    media: {
      avatar: '',
      cover: ''
    }
  }
};

export const state = () => ({
  ...initialState,
  available_themes: [
    'green',
    'pink',
    'purple',
    'indigo',
    'blue',
    'brown',
    'gray',
    'slate'
  ]
});

export const getters = {
  terms(state) {
    return state.terms;
  },
  stepName(state) {
    return state.step_name;
  },
  stepDetails(state) {
    return state.step_details;
  },
  stepCustomization(state) {
    return state.step_customization;
  },
  stepConnect(state) {
    return state.step_connect;
  },
  shop(state) {
    return state.shop;
  },
  shopExists(state) {
    return state.shop.id;
  },
  shopName(state) {
    return state.shop.name;
  },
  shopPostalCode(state) {
    return state.shop.postal_code;
  },
  shopCity(state) {
    return state.shop.city;
  },
  shopCountryId(state) {
    return state.shop.country_id;
  },
  shopShortDescriptionFr(state) {
    return state.shop.description_short.fr;
  },
  shopLongDescriptionFr(state) {
    return state.shop.description_long.fr;
  },
  shopShortDescriptionEn(state) {
    return state.shop.description_short.en;
  },
  shopLongDescriptionEn(state) {
    return state.shop.description_long.en;
  },
  shopShortDescriptionDe(state) {
    return state.shop.description_short.de;
  },
  shopLongDescriptionDe(state) {
    return state.shop.description_long.de;
  },
  shopShortDescriptionIt(state) {
    return state.shop.description_short.it;
  },
  shopLongDescriptionIt(state) {
    return state.shop.description_long.it;
  },
  availableThemes(state) {
    return state.available_themes;
  },
  shopTheme(state) {
    return state.shop.theme;
  },
  shopAvatar(state) {
    return state.shop.media.avatar;
  },
  shopCover(state) {
    return state.shop.media.cover;
  },
  shopStripeUserId(state) {
    return state.shop.stripe_user_id;
  },
  shopStripePublishableKey(state) {
    return state.shop.stripe_publishable_key;
  }
};

export const mutations = {
  SET_TERMS(state, terms) {
    state.terms = terms;
  },
  SET_STEP_NAME(state, value) {
    state.step_name = value;
  },
  SET_STEP_DETAILS(state, value) {
    state.step_details = value;
  },
  SET_STEP_CUSTOMIZATION(state, value) {
    state.step_customization = value;
  },
  SET_STEP_CONNECT(state, value) {
    state.step_connect = value;
  },
  SET_COVER(state, url) {
    state.shop.media.cover = url;
  },
  SET_SHOP_NAME(state, name) {
    state.shop.name = name;
  },
  SET_SHOP_POSTAL_CODE(state, postalCode) {
    state.shop.postal_code = postalCode;
  },
  SET_SHOP_CITY(state, city) {
    state.shop.city = city;
  },
  SET_SHOP_COUNTRY_ID(state, countryId) {
    state.shop.country_id = countryId;
  },
  SET_SHOP_SHORT_DESCRIPTION_FR(state, description) {
    state.shop.description_short.fr = description;
  },
  SET_SHOP_LONG_DESCRIPTION_FR(state, description) {
    state.shop.description_long.fr = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_EN(state, description) {
    state.shop.description_short.en = description;
  },
  SET_SHOP_LONG_DESCRIPTION_EN(state, description) {
    state.shop.description_long.en = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_DE(state, description) {
    state.shop.description_short.de = description;
  },
  SET_SHOP_LONG_DESCRIPTION_DE(state, description) {
    state.shop.description_long.de = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_IT(state, description) {
    state.shop.description_short.it = description;
  },
  SET_SHOP_LONG_DESCRIPTION_IT(state, description) {
    state.shop.description_long.it = description;
  },
  SET_SHOP_THEME(state, theme) {
    state.shop.theme = theme;
  },
  SET_SHOP(state, shop) {
    state.shop = shop;
  },
  SET_AVATAR(state, url) {
    state.shop.media.avatar = url;
  },
  RESET_SHOP(state) {
    Object.assign(state, initialState);
  }
};

export const actions = {
  setTerms({ commit }, terms) {
    commit('SET_TERMS', terms);
  },
  setStepName({ commit }, value) {
    commit('SET_STEP_NAME', value);
  },
  setStepDetails({ commit }, value) {
    commit('SET_STEP_DETAILS', value);
  },
  setStepCustomization({ commit }, value) {
    commit('SET_STEP_CUSTOMIZATION', value);
  },
  setStepConnect({ commit }, value) {
    commit('SET_STEP_CONNECT', value);
  },
  setShop({ commit }, shop) {
    commit('SET_SHOP', shop);
  },
  setAvatar({ commit }, url) {
    commit('SET_AVATAR', url);
  },
  setCover({ commit }, url) {
    commit('SET_COVER', url);
  },
  setShopName({ commit }, name) {
    commit('SET_SHOP_NAME', name);
  },
  setShopPostalCode({ commit }, postalCode) {
    commit('SET_SHOP_POSTAL_CODE', postalCode);
  },
  setShopCity({ commit }, city) {
    commit('SET_SHOP_CITY', city);
  },
  setShopCountryId({ commit }, countryId) {
    commit('SET_SHOP_COUNTRY_ID', countryId);
  },
  setShopShortDescriptionFr({ commit }, description) {
    commit('SET_SHOP_SHORT_DESCRIPTION_FR', description);
  },
  setShopLongDescriptionFr({ commit }, description) {
    commit('SET_SHOP_LONG_DESCRIPTION_FR', description);
  },
  setShopShortDescriptionEn({ commit }, description) {
    commit('SET_SHOP_SHORT_DESCRIPTION_EN', description);
  },
  setShopLongDescriptionEn({ commit }, description) {
    commit('SET_SHOP_LONG_DESCRIPTION_EN', description);
  },
  setShopShortDescriptionDe({ commit }, description) {
    commit('SET_SHOP_SHORT_DESCRIPTION_DE', description);
  },
  setShopLongDescriptionDe({ commit }, description) {
    commit('SET_SHOP_LONG_DESCRIPTION_DE', description);
  },
  setShopShortDescriptionIt({ commit }, description) {
    commit('SET_SHOP_SHORT_DESCRIPTION_IT', description);
  },
  setShopLongDescriptionIt({ commit }, description) {
    commit('SET_SHOP_LONG_DESCRIPTION_IT', description);
  },
  async setShopTheme({ commit, dispatch }, theme) {
    commit('SET_SHOP_THEME', theme);
    await dispatch('updateShop');
  },
  async updateShop({ state }) {
    await this.$axios.$patch(`/shops/${state.shop.slug}`, state.shop);
  },
  async getUserShop({ dispatch }) {
    const res = await this.$axios.$get('/user/shop');
    dispatch('setShop', res.data);
  },
  async getShop({ dispatch }, slug) {
    const res = await this.$axios.$get(`/shops/${slug}`);
    dispatch('setShop', res.data);
  },
  resetShop({ commit }) {
    commit('RESET_SHOP');
  }
};
