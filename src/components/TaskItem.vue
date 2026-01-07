<script setup>
  defineProps({
    task: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(["toggle"])
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="task.isCompleted" @change="emit('toggle', task.id)">
      {{ task.title }}
    </label>
  </li>
</template>