import axios from 'axios'

export default {
  fetchUserRides({ commit }) {
    axios.get('/api/stats/current_week')
      .then(response => {
        commit('fetchUserRides', response)
      })
      .catch(error => {
        commit('serverResponsError')
      })
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
  }
}