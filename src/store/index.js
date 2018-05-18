import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'
// import api from '@/utils/api'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data: {
      num1: 'A009',
      num2: 'HX00356',
      wait: 3
    },
    status: 0,
    userInfo: null
  },
  mutations: {
    status: (state, data) => {
      state.status = data
    },
    data: (state, data) => {
      state.data = data
    },
    userInfo: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      console.log('1111')
      let userInfo = await api.getUserInfo()
      commit('userInfo', userInfo)
    }
  }
})

export default store
