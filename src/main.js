import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Auth from './packages/auth/Auth.js'
import router from './router'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faUser, faChartLine, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheck, faUser, faChartLine, faSignOutAlt, faFacebook, faTwitter, faLinkedin, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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

window.eventHub = new Vue();

window.flash = function (message, type = 'success', stack = []) {
  eventHub.$emit('push-error', message, type, stack);
};

window.flashError = function (message, stack = []) {
  flash(message, 'danger', stack);
};
