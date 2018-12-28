export const state = () => ({
  terms: false,
  stepName: false,
  stepDetails: false,
  stepCustomization: false,
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
    theme_color: "",
    postal_code: "",
    city: "",
    country_id: ""
  }
});

export const getters = {
  terms(state) {
    return state.terms;
  },
  stepName(state) {
    return state.stepName;
  },
  stepDetails(state) {
    return state.stepDetails;
  },
  stepCustomization(state) {
    return state.stepCustomization;
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
};

export const mutations = {
  SET_TERMS(state, terms) {
    state.terms = terms;
  },
  SET_STEP_NAME(state, value) {
    state.stepName = value;
  },
  SET_STEP_DETAILS(state, value) {
    state.stepDetails = value;
  },
  SET_STEP_CUSTOMIZATION(state, value) {
    state.stepCustomization = value;
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
};