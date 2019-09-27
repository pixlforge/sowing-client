export const state = () => ({
  show: false
})

export const getters = {
  showConfirmationModal(state) {
    return state.show
  }
}

export const mutations = {
  SET_SHOW(state, show) {
    state.show = show
  }
}

export const actions = {
  displayConfirmationModal({ commit }, show) {
    commit('SET_SHOW', show)
  }
}
