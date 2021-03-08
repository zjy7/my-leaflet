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
    path: '/demo0',
    name: 'demo0',
    component: ()=>import('../views/demo0/index.vue')
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: ()=>import('../views/demo1/index.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  next()
})
export {routes}
export default router
