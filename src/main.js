import Vue from 'vue'
import App from './App.vue'
import './iconfonts/iconfonts.css'
import router from './router'
import store from './store'
import less from 'less'
import { request } from './components/network/request'


Vue.use(less)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

request({
  url: '/home/data'
}).then(
  res => console.log(res)
).catch(
  err => console.log(err)
)
