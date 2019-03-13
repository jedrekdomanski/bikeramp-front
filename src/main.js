import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Auth from './packages/auth/Auth.js'
import router from './router'
import store from './store/store'
import Vuelidate from 'vuelidate'
import 'nprogress/nprogress.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faUser, faChartLine, faSignOutAlt, faTrash, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheck, faUser, faChartLine, faSignOutAlt, faFacebook, faTwitter, faLinkedin, faTrash, faFileInvoiceDollar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Auth);
Vue.use(Vuelidate)

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
