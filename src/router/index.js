import { createRouter, createWebHistory } from 'vue-router'
import ShiFun from '../views/shiFun.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShiFun
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import('../views/shiFunMobile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
