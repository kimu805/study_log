import Dashboard from '@/pages/Dashboard.vue'
import TaskDetail from '@/pages/TaskDetail.vue'
import Tasks from '@/pages/Tasks.vue'
import Stats from '@/views/Stats.vue'
import TaskList from '@/views/TaskList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", 
      component: Dashboard
    },
    {
      path: "/dashboard",
      name: "tasks",
      component: TaskList
    },
    {
      path: "/tasks",
      name: "tasksManager",
      component: Tasks
    },
    {
      path: "/tasks/:id",
      name: "taskDetail",
      component: TaskDetail
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats
    }
  ]
})

export default router