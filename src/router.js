import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import User from './components/userData/userProfile.vue'
import UserForm from './components/forms/userForm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: WelcomePage,
    },
    {
      path: '/signup',
      name: 'Signup',
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
      name: 'Signin', 
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
      name: 'Dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/edit',
      name: 'EditUserProfile', 
      component: UserForm,
      meta: {
        requiresAuth: true
      }
    }
  ]
});