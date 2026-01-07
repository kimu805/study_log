<script setup>
  import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
  import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
  const toggleTask = (id) => {
    tasksStore.toggleComplete(id)
  }
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <RouterLink :to="{ name: 'dashboard' }">Back to Dashboard</RouterLink>

    <TaskForm />

    <h2>未完了</h2>
    <TaskList :tasks="tasksStore.activeTasks" @toggle="toggleTask" />

    <h2>完了済み</h2>
    <TaskList :tasks="tasksStore.completedTasks" @toggle="toggleTask" />
  </div>
  
</template>