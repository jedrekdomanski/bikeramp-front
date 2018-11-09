import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      apiToken: null,
      user: {},
      signedUp: '',
      signUpError: '',
      
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
  getters,
  mutations,
  actions
})
