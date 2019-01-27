import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import NProgress from 'nprogress'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
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
      component: SignupPage,
      beforeEnter(to, from, next){
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
      component: SigninPage,
      beforeEnter(to, from, next){
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
      },
      props: true,
      beforeEnter(to, from, next) {
        store.dispatch('user/fetchCurrentUser').then(currentUser => {
          to.params.currentUser = currentUser
          next()
        })
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
      component: () => import('./components/invoices/CreateInvoice.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoices/show',
      name: 'show-invoice',
      component: () => import('./components/invoices/ShowInvoice.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./components/NotFound.vue')
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})

router.beforeEach(
  (to, from, next) => {
    NProgress.start()
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/signin',
        });
      }
    }

    next();
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router