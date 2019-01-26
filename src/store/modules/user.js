import UserService from '../../services/user.service'

let userService = new UserService();

export const namespaced = true

export const state = {
  currentUser: {}
}

export const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser
  }
}

export const actions = {
  fetchCurrentUser({ commit }) {
    userService.fetchCurrentUser()
      .then(response => {
        commit('SET_CURRENT_USER', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'danger',
          message: 'There was a problem fetching your profile'
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  }
}

export const getters = {
  currentUser: state => {
    return state.currentUser
  }
}