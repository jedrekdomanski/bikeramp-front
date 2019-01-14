import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Auth from './packages/auth/Auth.js'
import router from './router'
import store from './store/store'

Vue.use(Auth);

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.getItem('token')
  return config;
})

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!Vue.auth.isAuthenticated()) {
          next({
              path: '/signin',
          });
      }
    }

    next();
  }
);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
