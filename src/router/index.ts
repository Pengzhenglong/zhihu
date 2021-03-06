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
      component: () => import('../views/Login.vue'),
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import('../views/ColumnDetail.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreatePost.vue'),
      meta: { requiredLogin: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.meta);

  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }



})
export default router