import Vue from 'vue'
import Vuex from 'vuex'
import moduleEqm from './modules/moduleEqm'
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
    message: [],
    messageObj: []
  },
  getters: {
    messageUpper (state) {
      return state.message.map((str) => str.substring(0, 1).toUpperCase() + str.substring(1));
    },

  },
  mutations: {
    getMessage (state, payload) {
      state.message.push(`${payload.message} from ${payload.topic}`)
    },
    getMessageObj (state, payload) {
      let index = state.messageObj.findIndex(v => v.id === payload.json.id);
      if (index !== -1) {
        // 有这一项, 那就代替, 但是等于不是响应式的
        state.messageObj[index] = payload.json;
      } else {
        state.messageObj.push(payload.json);
      }
      // state.messageObj = state.messageObj.filter(v => v.id === payload.json.id)
      state.messageObj.sort((a, b) => a.id - b.id)
    }
  },
  actions: {
  },
  modules: {
    eqm: moduleEqm
  }

})
