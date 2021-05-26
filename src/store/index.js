import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '1.2.3',
    isShowHeader: false,
    btnPermissions: ['permssion0', 'permssion1', 'permssion2']
  },
  mutations: {
    setIsShowHeader (state, payload) {
      state.isShowHeader = payload
    }
  },
  modules: {
  },
  getters: {
    btnPermissions (state) {
      return state.btnPermissions
    }
  }
})

export default store
