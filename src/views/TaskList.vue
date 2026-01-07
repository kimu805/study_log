<script setup>
  import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <RouterLink :to="{ name: 'tasksManager' }">Go to Task Manager</RouterLink> |
    <RouterLink to="/">Back to Dashboard</RouterLink>
    <div>
      <button @click="tasksStore.filter = 'all'">全て</button>
      <button @click="tasksStore.filter = 'completed'">完了</button>
      <button @click="tasksStore.filter = 'incomplete'">未完了</button>
    </div>

    <ul>
      <li v-for="task in tasksStore.filteredTasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>