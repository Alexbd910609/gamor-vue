import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: '/streams',
    name: 'streams',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: '/party',
    name: 'party',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: '/premium',
    name: 'premium',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/SignInView/SignInView.vue'),
  },
  {
    path: '',
    redirect: () => { return {name: 'home'}}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
