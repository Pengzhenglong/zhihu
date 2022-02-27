import store from '@/store';
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import('../views/ColumnDetail.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreatePost.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }



})
export default router