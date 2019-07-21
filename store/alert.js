export const state = () => ({
  message: '',
  type: ''
});

export const getters = {
  message(state) {
    return state.message;
  },
  type(state) {
    return state.type;
  }
};

export const mutations = {
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_TYPE(state, type) {
    state.type = type;
  },
  EMPTY_MESSAGE(state) {
    state.message = '';
  }
};

export const actions = {
  flash({ commit }, content) {
    commit('SET_TYPE', content.type);
    commit('SET_MESSAGE', content.message);
  },
  close({ commit }) {
    commit('EMPTY_MESSAGE');
  }
};
