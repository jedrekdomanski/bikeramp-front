import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/main.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage, beforeEnter(to, from, next){
        if (localStorage.token){
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/signin', 
      name: 'signin', 
      component: SigninPage, beforeEnter(to, from, next){
        if (localStorage.token){
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./components/dashboard/dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'userProfile',
      component: () => import('./components/user/Show.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/:username',
      name: 'editUserProfile', 
      component: () => import('./components/user/Update.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoices/new',
      name: 'NewInvoice',
      component: () => import('./components/invoices/New.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoices/show',
      name: 'InvoicePreview',
      component: () => import('./components/invoices/Show.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
});