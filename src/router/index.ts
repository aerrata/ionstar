import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import { Preferences } from '@capacitor/preferences'
import TabsPage from '@/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: () => import('@/views/Auth/Login.vue'), meta: { requiresGuest: true } },
  { path: '/', redirect: '/tabs/home' },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue'),
      },
    ],
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const { value: isAuthenticated } = await Preferences.get({ key: 'user' })

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/login' })
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
