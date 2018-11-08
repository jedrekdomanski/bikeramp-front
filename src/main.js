import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://54.38.36.242'
axios.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.getItem('token')
  return config;
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
