<script setup>
  import TaskForm from '@/components/TaskForm.vue';
  import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <h1>Tasks</h1>
  <RouterLink :to="{ name: 'dashboard' }">Back to Dashboard</RouterLink>

  <TaskForm />

  <h2>未完了</h2>
  <ul>
    <li v-for="task in tasksStore.activeTasks" :key="task.id">
      <label>
        <input type="checkbox" :checked="task.isCompleted" @change="tasksStore.toggleComplete(task.id)">
        {{ task.title }}
      </label>
    </li>
  </ul>

  <h2>完了済み</h2>
  <ul>
    <li v-for="task in tasksStore.completedTasks" :key="task.id">
      <label>
        <input type="checkbox" :checked="task.isCompleted" @change="tasksStore.toggleComplete(task.id)">
        {{ task.title }}
      </label>
    </li>
  </ul>
</template>