<script setup>
import TaskItem from './TaskItem.vue';

  defineProps({
    tasks: {
      type: Array,
      required: true
    }
  })

  const emit = defineEmits(["toggle"])
</script>

<template>
  <ul>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @toggle="emit('toggle', $event)" />
  </ul>
</template>