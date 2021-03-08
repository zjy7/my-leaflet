import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    version:'1.2.3',
    isShowHeader:true
  },
  mutations:{
    setIsShowHeader(state,payload){
      state.isShowHeader = payload
    }
  },
  modules:{
  }
})

export default store
