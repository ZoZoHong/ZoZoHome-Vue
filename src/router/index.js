import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/home.vue'

const Smart = () => import('../view/smart.vue')
const User = () => import('../view/user.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/smart',
    name: 'Smart',
    component: Smart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass:'active'
})

export default router
