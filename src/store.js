import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiToken: null,
    user: null,
    rides: null,
    signedUp: '',
    signUpError: '',
    signedIn: '',
    signInError: ''
  },
  mutations: {
    authenticateUser(state, payload) {
      state.apiToken = payload.token
      state.user = payload.user
      state.signedIn = true

    },
    signInError(state){
      state.signInError = true;
    },
    signedUp(state){
      state.signedUp = true;
    },
    signUpError(state){
      state.signUpError = true;
    },
    clearAuthData(state){
      state.apiToken = null,
      state.user = null
    },
    addUserRides(state, payload){
      state.rides = payload
    }
  },
  actions: {
    signup({ commit }, payload){
      axios.post('/api/users', payload)
        .then(response => {
          commit('signedUp')
        })
        .catch(error => {
          commit('signUpError');
        })
    },
    login({ commit }, payload){
      axios.post('/api/users/login', payload)
        .then(response => {
          commit('authenticateUser', {
            token: response.data.api_token,
            user: response.data.user
          })
          localStorage.setItem('token', response.data.api_token)
          localStorage.setItem('user', response.data.user)
          router.replace('/dashboard')
        })
        .catch(error => {
          commit('signInError')
        })
    },
    fetchUserRides({ commit }) {
      axios.get('/api/stats/current_week')
        .then(response => {
          commit('addUserRides', response.data)
        })
        .catch(error => {
          commit('signInError')
        })
    },
    logout({ commit }) {
      commit('clearAuthData');
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.replace('/')
    },
    tryAutoLogin({ commit }){
      const token = localStorage.getItem('token')
      if (!token){
        return
      }
      const user = localStorage.getItem('user')
      if (!user) {
        return
      }
      commit('authenticateUser', { token: token, user: user })
    }
  },
  getters: {
    signedUp: state => {
      return state.signedUp;
    },
    signUpError: state => {
      return state.signUpError;
    },
    signedIn: state => {
      return state.apiToken !== null;
    },
    signInError: state => {
      return state.signInError;
    },
    current_user: state => {
      return !state.user ? false : state.user.email;
    },
    userRides: state => {
      return state.rides;
    },
    token: state => {
      return state.apiToken;
    }
  }
})