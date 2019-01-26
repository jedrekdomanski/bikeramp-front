import axios from 'axios'
import { sum, sumBy, orderBy } from 'lodash'

export const namespaced = true

export const state = {
  data: []
}

export const mutations = {
  SET_RIDES(state, payload){
    state.data = payload.data
  },
  ADD_RIDE(state, ride){
    state.data.push(ride)
  },
  REMOVE_RIDE(state, index){
    state.data.splice(index, 1)
  },
  SET_MONTHLY_STATS(state, data){
    state.data.monthly_stats = data
  },
  CLEAR_USER_DATA(state){
    state.data = []
  }
}

export const actions = {  
  fetchUserRides({ commit }) {
    axios.get('/api/stats/current_week')
      .then(response => {
        commit('SET_RIDES', response)
      })
      .catch(error => {
        console.log('Do something...')
      })
  },
  async createRide({ commit, dispatch }, ride){
    await axios.post('/api/trips', ride)
      .then(response => {
        commit('ADD_RIDE', response.data)
        const notification = {
          type: 'success',
          message: 'Ride has been created'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your ride'
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  deleteRide({ commit }, payload){
    axios.delete('/api/trips/' + payload.id)
      .then(response => {
        commit('REMOVE_RIDE', payload.index)
      })
      .catch(error => {
        console.log('Do something ...')
      })
  },
  fetchMonthlyStats({ commit }){
    axios.get('/api/stats/monthly')
      .then(response => {
        commit('SET_MONTHLY_STATS', response.data)
      })
      .catch(error => {
        console.log(error)
    })
  },
  clearUserData({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

export const getters = {
  userRides: state => {
    let rides = state.data
    let ridesSortedByDate = orderBy(rides, ['date'], ['asc'])
    return ridesSortedByDate
  },
  weeklyTotals: state => {
    let rides = state.data
    let total_distance = sumBy(rides, 'distance')
    let total_price = sumBy(rides, 'price')
    
    return { 
      total_distance: total_distance,
      total_price: total_price
    }
  }
}