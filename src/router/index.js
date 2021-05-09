import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/home.vue'

const Smart = () => import('../view/smart.vue')
const User = () => import('../view/user.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title:'首页'
    },
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title:'我的'
    },
    component: User
  },
  {
    path: '/smart',
    name: 'Smart',
    meta: {
      title:'智能'
    },
    component: Smart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass:'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
