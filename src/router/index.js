import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContratoView.vue')
  },
  {
    path: '/contrato',
    name: 'contrato',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContratoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
