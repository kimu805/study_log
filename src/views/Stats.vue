<script setup>
  import { useTasksStore } from '@/stores/tasks';

  const tasksStore = useTasksStore()
</script>

<template>
  <div>
    <h1>Stats</h1>

    <ul>
      <li>総タスク数：{{ tasksStore.totalCount }}</li>
      <li>完了：{{ tasksStore.completedCount }}</li>
      <li>未完了：{{ tasksStore.activeCount }}</li>
      <li>完了率：{{ tasksStore.completionRate }}</li>
    </ul>
  </div>
</template>