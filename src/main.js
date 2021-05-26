import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import btnsPermission from './directive/btnPermisstion'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(btnsPermission)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
