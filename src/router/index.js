import Dashboard from '@/pages/Dashboard.vue'
import Tasks from '@/pages/Tasks.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", 
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks
    }
  ]
})

export default router