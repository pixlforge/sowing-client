export const state = () => ({
  addressSelectorIsOpen: false,
  addressCreatorIsOpen: false,
})

export const getters = {
  addressSelector(state) {
    return state.addressSelectorIsOpen
  },
  addressCreator(state) {
    return state.addressCreatorIsOpen
  },
  addressManagersVisible(state) {
    return state.addressSelectorIsOpen || state.addressCreatorIsOpen
  },
}

export const mutations = {
  SET_ADDRESS_SELECTOR(state, value) {
    state.addressSelectorIsOpen = value
  },
  SET_ADDRESS_CREATOR(state, value) {
    state.addressCreatorIsOpen = value
  },
}

export const actions = {
  openAddressSelector({ commit }) {
    commit('SET_ADDRESS_SELECTOR', true)
  },
  closeAddressSelector({ commit }) {
    commit('SET_ADDRESS_SELECTOR', false)
  },
  openAddressCreator({ commit }) {
    commit('SET_ADDRESS_CREATOR', true)
  },
  closeAddressCreator({ commit }) {
    commit('SET_ADDRESS_CREATOR', false)
  },
}
