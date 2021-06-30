import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/docs',
    component: () => import('@/views/docs/DocLayout.vue'),
    children: [
      {
        path: 'button',
        name: 'button',
        component: () => import('@/views/docs/button/Button.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
