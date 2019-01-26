import axios from 'axios'
import router from '../../router'

export const namespaced = true

export const state = {
  apiToken: null,
  signedIn: false
}

export const mutations = {
  AUTHENTICATE_USER(state, payload) {
    state.apiToken = payload
    state.signedIn = true
  },
  CLEAR_AUTH_DATA(state){
    state.apiToken = null
    state.signedIn = false
  }
}

export const actions = {
  signup({ commit }, payload){
    axios.post('/api/auth', payload)
      .then(response => {
        console.log('Do something...')
      })
      .catch(error => {
        console.log('Do something...')
      })
  },
  login({ commit, dispatch }, payload){
    axios.post('/api/auth/login', payload)
      .then(response => {
        commit('AUTHENTICATE_USER', response.data.api_token)
        localStorage.setItem('token', response.data.api_token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        router.push({ name: 'home' })

        const notification = {
          type: 'success',
          message: 'You have successfully signed in'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Invalid username or password'
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  logout({ commit, dispatch }) {
    commit('CLEAR_AUTH_DATA')
    dispatch('ride/clearUserData', { root: true })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({ name: 'home' })
  },
  tryAutoLogin({ commit }){
    const token = localStorage.getItem('token')
    if (!token){
      return
    }
    commit('AUTHENTICATE_USER', token)
  }
}

export const getters = {
  token: state => {
    return state.apiToken
  },
}