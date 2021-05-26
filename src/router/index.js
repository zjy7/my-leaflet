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
    component: () => import('../views/portal/index.vue')
  },
  {
    path: '/demo0',
    name: 'demo0',
    component: () => import('../views/demo0/index.vue')
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: () => import('../views/demo1/index.vue')
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: () => import('../views/demo2/index.vue')
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: () => import('../views/demo3/index.vue')
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: () => import('../views/demo4/index.vue')
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: () => import('../views/demo5/index.vue')
  },
  {
    path: '/bug0',
    name: 'bug0',
    component: () => import('../views/bug0/index.vue')
  },
  {
    path: '/bug1',
    name: 'bug1',
    component: () => import('../views/bug1/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})
export { routes }
export default router
