import axios from 'axios'
import router from '../../router'
import AuthService from '../../services/auth.service.js'
import UserService from '../../services/user.service.js'

let authService = new AuthService()

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
  signup({ commit, dispatch }, payload){
    authService.signup(payload)
      .then(response => {
        router.push({ name: 'home' })

        const notification = {
          type: 'success',
          message: 'You have successfully signed up. In order to continue, you must confirm your account'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        console.log('Do something...')
      })
  },
  login({ commit, dispatch }, payload){
    authService.login(payload)
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
          type: 'danger',
          message: 'There was a problem signing in. Check you username or password'
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  logout({ commit, dispatch }) {
    commit('CLEAR_AUTH_DATA')
    dispatch('ride/clearUserData', null, { root: true })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({ name: 'home' })

    const notification = {
      type: 'success',
      message: 'You have successfully signed out'
    }
    dispatch('notification/add', notification, { root: true })
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