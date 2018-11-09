import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      apiToken: null,
      user: null,
      signedUp: '',
      signUpError: '',
      signedIn: '',
      signInError: ''
    },
    data: {
      rides: []
    },
    alerts: {
      showErrorAlert: false
    },
    serverData: {
      serverResponsError: false
    }
  },
  mutations: {
    authenticateUser(state, payload) {
      state.auth.apiToken = payload.token
      state.auth.user = payload.user
      state.auth.signedIn = true

    },
    signInError(state){
      state.auth.signInError = true;
    },
    signedUp(state){
      state.auth.signedUp = true;
    },
    signUpError(state){
      state.auth.signUpError = true;
    },
    clearAuthData(state){
      state.auth.apiToken = null,
      state.auth.user = null
    },
    clearUserData(state){
      state.data.rides = null
    },
    fetchUserRides(state, payload){
      state.data.rides = payload.data
    },
    addRide(state, ride){
      state.data.rides.push(ride)
    },
    showErrorAlert(state){
      state.alerts.showErrorAlert = true
      setTimeout(() => {
        state.alerts.showErrorAlert = false
      }, 5000);
    },
    serverResponsError(state){
      state.serverData.serverResponsError = true
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
          router.replace('/')
        })
        .catch(error => {
          commit('signInError')
        })
    },
    fetchUserRides({ commit }) {
      axios.get('/api/stats/current_week')
        .then(response => {
          commit('fetchUserRides', response)

        })
        .catch(error => {
          console.log(error)
          commit('serverResponsError')
        })
    },
    logout({ commit }) {
      commit('clearAuthData');
      commit('clearUserData');
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
    },
    createRide({ commit }, ride){
      axios.post('/api/trips', ride)
        .then(response => {
          commit('addRide', response.data)
        })
        .catch(error => {
          commit('showErrorAlert')
        })
    }
  },
  getters: {
    signedUp: state => {
      return state.auth.signedUp;
    },
    signUpError: state => {
      return state.auth.signUpError;
    },
    signedIn: state => {
      return state.auth.apiToken !== null;
    },
    signInError: state => {
      return state.auth.signInError;
    },
    current_user: state => {
      return !state.auth.user ? false : state.auth.user.email;
    },
    userRides: state => {
      let rides = state.data.rides
      rides.sort(( a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      return rides
    },
    token: state => {
      return state.auth.apiToken;
    },
    showErrorAlert: state => {
      return state.alerts.showErrorAlert;
    }
  }
})
