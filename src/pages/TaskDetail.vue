<script setup>
  import { useTasksStore } from '@/stores/tasks';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const tasksStore = useTasksStore()

  const taskId = route.params.id
  const task = computed(() => {
    return tasksStore.tasks.find(task => task.id === taskId)
  })
</script>

<template>
  <div>
    <h1>Task Detail</h1>

    <div v-if="task">
      <p><strong>タイトル：</strong>{{ task.title }}</p>
      <p>
        <strong>状態：</strong>
        {{ task.isCompleted ? "完了済み" : "未完了" }}
      </p>
    </div>

    <div v-else>
      <h2>404 Not Found</h2>
    </div>

    <RouterLink :to="{ name: 'tasks' }">一覧へ戻る</RouterLink>
  </div>
</template>