export const state = () => ({
  terms: false,
  step_name: false,
  step_details: false,
  step_customization: false,
  form: {
    name: "",
    description_short: {
      en: "",
      fr: "",
      de: "",
      it: ""
    },
    description_long: {
      en: "",
      fr: "",
      de: "",
      it: ""
    },
    theme: "green",
    postal_code: "",
    city: "",
    country_id: "",
    media: {
      avatar: "",
      cover: ""
    }
  },
  available_themes: ["green", "pink", "purple", "indigo", "blue", "brown", "grey", "slate"]
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
  shop(state) {
    return state.form;
  },
  shopExists(state) {
    return state.form.id;
  },
  shopName(state) {
    return state.form.name;
  },
  shopPostalCode(state) {
    return state.form.postal_code;
  },
  shopCity(state) {
    return state.form.city;
  },
  shopCountryId(state) {
    return state.form.country_id;
  },
  shopShortDescriptionFr(state) {
    return state.form.description_short.fr;
  },
  shopLongDescriptionFr(state) {
    return state.form.description_long.fr;
  },
  shopShortDescriptionEn(state) {
    return state.form.description_short.en;
  },
  shopLongDescriptionEn(state) {
    return state.form.description_long.en;
  },
  shopShortDescriptionDe(state) {
    return state.form.description_short.de;
  },
  shopLongDescriptionDe(state) {
    return state.form.description_long.de;
  },
  shopShortDescriptionIt(state) {
    return state.form.description_short.it;
  },
  shopLongDescriptionIt(state) {
    return state.form.description_long.it;
  },
  availableThemes(state) {
    return state.available_themes;
  },
  shopTheme(state) {
    return state.form.theme;
  },
  shopAvatar(state) {
    return state.form.media.avatar;
  },
  shopCover(state) {
    return state.form.media.cover;
  },
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
  SET_COVER(state, url) {
    state.form.media.cover = url;
  },
  SET_SHOP_NAME(state, name) {
    state.form.name = name;
  },
  SET_SHOP_POSTAL_CODE(state, postalCode) {
    state.form.postal_code = postalCode;
  },
  SET_SHOP_CITY(state, city) {
    state.form.city = city;
  },
  SET_SHOP_COUNTRY_ID(state, countryId) {
    state.form.country_id = countryId;
  },
  SET_SHOP_SHORT_DESCRIPTION_FR(state, description) {
    state.form.description_short.fr = description;
  },
  SET_SHOP_LONG_DESCRIPTION_FR(state, description) {
    state.form.description_long.fr = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_EN(state, description) {
    state.form.description_short.en = description;
  },
  SET_SHOP_LONG_DESCRIPTION_EN(state, description) {
    state.form.description_long.en = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_DE(state, description) {
    state.form.description_short.de = description;
  },
  SET_SHOP_LONG_DESCRIPTION_DE(state, description) {
    state.form.description_long.de = description;
  },
  SET_SHOP_SHORT_DESCRIPTION_IT(state, description) {
    state.form.description_short.it = description;
  },
  SET_SHOP_LONG_DESCRIPTION_IT(state, description) {
    state.form.description_long.it = description;
  },
  SET_SHOP_THEME(state, theme) {
    state.form.theme = theme;
  },
  SET_SHOP(state, shop) {
    state.form = shop;
  },
  SET_AVATAR(state, url) {
    state.form.media.avatar = url;
  },
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
  async setShopTheme({ commit }, theme) {
    commit('SET_SHOP_THEME', theme);
  },
  async getShop({ dispatch }) {
    let res = await this.$axios.$get("/user/shop");
    dispatch('setShop', res.data);
  },
};