import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      // route level code-splitting
      // this generates a separate chunk (Work.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/aboutme',
      name: 'about me',
      // route level code-splitting
      // this generates a separate chunk (Work.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/workdetails/:id',
      name: 'workdetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkDetails.vue'),
      props: true 
    }
  ]
});
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
export default router
