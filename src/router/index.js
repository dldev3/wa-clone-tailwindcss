import { createRouter, createWebHistory } from 'vue-router'
import Calls from '../views/Calls.vue'
import Chats from '../views/Chats.vue'
import Contacts from '../views/Contacts.vue'
import Messages from '../views/Messages.vue'

const routes = [
  {
    path: '/calls',
    name: 'Calls',
    component: Calls
  },
  {
    path: '/',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
