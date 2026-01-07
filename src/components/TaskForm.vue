<script setup>
  import { useTasksStore } from '@/stores/tasks';
  import { ref } from 'vue';

  const tasksStore = useTasksStore()
  const title = ref("")

  const submit = () => {
    tasksStore.addTask(title.value)
    title.value = ""
  }

</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="title" placeholder="新規タスク" type="text">
    <button type="submit">Add</button>
  </form>
</template>