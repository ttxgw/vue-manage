import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
