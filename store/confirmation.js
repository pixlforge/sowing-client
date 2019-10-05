export const state = () => ({
  show: false,
  resourceId: null
})

export const getters = {
  showModal(state) {
    return state.show
  },
  getResourceId(state) {
    return state.resourceId
  }
}

export const mutations = {
  TOGGLE_SHOW(state) {
    state.show = !state.show
  },
  SET_RESOURCE_ID(state, resourceId) {
    if (typeof resourceId === 'object') {
      return
    }
    state.resourceId = resourceId
  },
  CLEAR_RESOURCE_ID(state) {
    state.resourceId = null
  }
}

export const actions = {
  openModal({ commit }, resourceId) {
    commit('TOGGLE_SHOW')
    commit('SET_RESOURCE_ID', resourceId)
  },
  closeModal({ commit }) {
    commit('TOGGLE_SHOW')
    commit('CLEAR_RESOURCE_ID')
  }
}
