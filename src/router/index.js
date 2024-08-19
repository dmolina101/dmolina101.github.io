import { createRouter, createWebHistory } from 'vue-router'
import EventRooms from '../views/events/EventRooms.vue'
import Events from '../views/events/Index.vue'
import Sell from '../views/sell/Index.vue'
const ActivateUserAccount = () => import('../views/signup/ActivateUserAccount.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Events
    },
    {
      path: "/activate-user-account",
      name: "activate-user-account",
      component: () => import('../views/signup/ActivateUserAccount.vue')
    },
    {
        path:'/events',
        name: 'events',
        component: Events
    },
    {
        path:'/sell',
        name: 'sell',
        component: Sell
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/signin/Index.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/signup/Index.vue')
    }
  ]
})

export default router