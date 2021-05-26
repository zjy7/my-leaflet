
import store from '@/store/index'

export default {
  install (Vue) {
    Vue.directive('has', {
      async bind (el, binding) {
        const permissionCode = binding.value
        let permissionList = store.getters.btnPermissions
        if (!permissionList) {
          await store.dispatch('getBtnPermission')
          permissionList = store.getters.btnPermissions
        }
        if (permissionList.indexOf(permissionCode) === -1) {
          Vue.prototype.$nextTick(() => {
            if (el.parentNode) {
              el.parentNode.removeChild(el)
            }
          })
        }
      }
    })
  }
}
