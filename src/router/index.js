import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

const Smart = () => import('../views/smart.vue')
const User = () => import('../views/user.vue')
const Test = () => import('../views/test.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '我的'
    },
    component: User
  },
  {
    path: '/smart',
    name: 'Smart',
    meta: {
      title: '智能'
    },
    component: Smart
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试'
    },
    component: Test
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
