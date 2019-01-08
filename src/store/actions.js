import axios from 'axios'
import router from '../router'

export default {
  signup({ commit }, payload){
    axios.post('/api/auth', payload)
      .then(response => {
        commit('signedUp')
      })
      .catch(error => {
        commit('signUpError');
      })
  },
  login({ commit }, payload){
    axios.post('/api/auth/login', payload)
      .then(response => {
        commit('authenticateUser', {
          token: response.data.api_token,
          user: response.data.user
        })
        localStorage.setItem('token', response.data.api_token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        
        router.push('/')
      })
      .catch(error => {
        commit('showErrorAlert')
      })
  },
  fetchUserRides({ commit }) {
    axios.get('/api/stats/current_week')
      .then(response => {
        commit('fetchUserRides', response)
      })
      .catch(error => {
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
    commit('authenticateUser', { token: token, user: JSON.parse(user) })
  },
  async createRide({ commit }, ride){
    await axios.post('/api/trips', ride)
      .then(response => {
        commit('addRide', response.data)
      })
      .then(response => {
        commit('showSuccessAlert')
      })
      .catch(error => {
        commit('showErrorAlert')
      })
  },
  deleteRide({ commit }, payload){
    axios.delete('/api/trips/' + payload.id)
      .then(response => {
        commit('deleteRide', payload.index)
      })
      .catch(error => {
        console.log('Do something ...')
      })
  },
  fetchMonthlyStats({ commit }){
    axios.get('/api/stats/monthly')
      .then(response => {
        commit('fetchMonthlyStats', response.data)
      })
      .catch(error => {
        console.log(error)
    })
  },
  saveUserProfile({ commit }, payload){
    axios.patch('/api/users/' + payload.get('id'), payload)
      .then(response => {
        commit('saveUserProfile', response.data)
        router.push('/profile/edit')
        console.log(response)
      })
      .catch(error => {
        console.log(response)
      })
  }
}