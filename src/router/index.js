import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ComingSoonView from '../views/ComingSoonView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: ComingSoonView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
