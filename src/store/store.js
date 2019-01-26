import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import * as auth from './modules/auth'
import * as ride from './modules/ride'
import * as notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  getters,
  modules: {
    auth,
    ride,
    notification
  }
})
