import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Reset from '../components/Reset.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset/:token',
    name: 'Reset',
    component: Reset
  }
]

const router = new VueRouter({
  routes
})

export default router