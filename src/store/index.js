import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件 use 自动install
Vue.use(Vuex)
// 2.创建对象然后暴露出去
// $store.<属性> 可以全局使用属性
export default new Vuex.Store({
  state: {
    smarts: [
      {
        id: 1,
        function: "我出门了",
        img: "url",
      },
      {
        id: 2,
        function: "我回家了",
        img: "url",
      },
      {
        id: 3,
        function: "我去去就来了",
        img: "url",
      },
    ],
    message: [

    ]
  },
  getters: {
    messageUpper (state) {
      return state.message.map((str) => str.substring(0, 1).toUpperCase() + str.substring(1));
    }
  },
  mutations: {
    getMessage (state, payload) {
      state.message.push(`${payload.message} from ${payload.topic}`)
    }
  },
  actions: {
  },
  modules: {
  }
})
