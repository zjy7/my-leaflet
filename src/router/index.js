import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/portal'
  },
  {
    path: '/portal',
    name: 'portal',
    component: ()=>import('../views/portal/index.vue')
  },
  {
    path: '/leaflet-demo',
    name: 'leaflet-demo',
    component: ()=>import('../views/leaflet-demo/index.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  next()
})
export {routes}
export default router
