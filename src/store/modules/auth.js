import axios from 'axios'
import router from '../../router'

export const namespaced = true

export const state = {
  apiToken: null,
  signedIn: false
}

export const mutations = {
  authenticateUser(state, payload) {
    state.apiToken = payload
    state.signedIn = true
  },
  signedUp(state){
    state.signedUp = true;
  },
  signUpError(state){
    state.signUpError = true
  },
  clearAuthData(state){
    state.apiToken = null
    state.signedIn = false
  },
  clearUserData(state){
    // state.data.rides = []
  }
}

export const actions = {
  signup({ commit }, payload){
    axios.post('/api/auth', payload)
      .then(response => {
        commit('signedUp')
      })
      .catch(error => {
        commit('signUpError')
      })
  },
  login({ commit }, payload){
    axios.post('/api/auth/login', payload)
      .then(response => {
        commit('authenticateUser', response.data.api_token)
        localStorage.setItem('token', response.data.api_token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        router.push({ name: 'home' })
      })
      .catch(error => {
        commit('showErrorAlert')
      })
  },
  logout({ commit, dispatch }) {
    commit('clearAuthData')
    // commit('clearUserData')
    // dispatch('clearUserData')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({ name: 'home' })
  },
  tryAutoLogin({ commit }){
    const token = localStorage.getItem('token')
    if (!token){
      return
    }
    commit('authenticateUser', token)
  }
}