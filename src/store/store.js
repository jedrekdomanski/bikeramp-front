import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as ride from './modules/ride'
import * as user from './modules/user'
import * as notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    ride,
    user,
    notification
  }
})
