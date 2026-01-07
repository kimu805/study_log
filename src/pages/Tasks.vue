<script setup>
  import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
  import { useTasksStore } from '@/stores/tasks';
import Stats from '@/views/Stats.vue';

  const tasksStore = useTasksStore()
  const toggleTask = (id) => {
    tasksStore.toggleComplete(id)
  }
</script>

<template>
  <div class="main">
    <div class="tasks">
      <h1>Tasks Manager</h1>
      <RouterLink to="/">Back to Dashboard</RouterLink> |
      <RouterLink :to="{ name: 'tasks' }">Back to Tasks</RouterLink>

      <TaskForm />

      <h2>未完了</h2>
      <TaskList :tasks="tasksStore.activeTasks" @toggle="toggleTask" />

      <h2>完了済み</h2>
      <TaskList :tasks="tasksStore.completedTasks" @toggle="toggleTask" />
    </div>

    <div class="stats">
      <Stats />
    </div>
  </div>
  
</template>

<style scoped>
  .main {
    display: flex;
    justify-content: space-between;
  }
</style>