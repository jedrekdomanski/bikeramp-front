import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store/store'

axios.defaults.baseURL = 'http://localhost:3000'
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
