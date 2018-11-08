import Vue from 'vue'
import VueRouter from 'vue-router'


import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage , beforeEnter(to, from, next){
      if (localStorage.token){
        next('/')
      } else {
        next()
      }
    }
  },
  { path: '/signin', component: SigninPage, beforeEnter(to, from, next){
      if (localStorage.token){
        next('/')
      } else {
        next()
      }
    }
  },
  { path: '/dashboard', component: DashboardPage, beforeEnter(to, from, next) {
      if (localStorage.token){
        next()
      } else {
        next('/signin')
      }
    }
  }
]

export default new VueRouter({mode: 'history', routes})