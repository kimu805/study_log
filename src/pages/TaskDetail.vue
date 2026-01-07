<script setup>
import { useTasksStore } from '@/stores/tasks';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

  const route = useRoute()
  const router = useRouter()
  const tasksStore = useTasksStore()

  const taskId = route.params.id
  const task = computed(() => {
    return tasksStore.tasks.find(task => task.id === taskId)
  })

  const isEditing = ref(false)
  const editTitle = ref("")

  watch(task, (newTask) => {
    if(newTask) {
      editTitle.value = newTask.title
    }
  }, { immediate: true })

  const save = () => {
    tasksStore.updateTaskTitle(taskId, editTitle.value)
    isEditing.value = false
  }

  const onDelete = () => {
    if(!task.value) return 

    if (confirm("このタスクを削除しますか？")) {
      tasksStore.removeTask(task.value.id)
      router.push("/tasks")
    }
  }
</script>

<template>
  <div>
    <h1>Task Detail</h1>

    <div v-if="task">
      <div v-if="!isEditing">
        <p><strong>タイトル：</strong>{{ task.title }}</p>
        <p>
          <strong>状態：</strong>
          {{ task.isCompleted ? "完了済み" : "未完了" }}
        </p>
        <button @click="isEditing = true">Edit</button>
        <button @click="onDelete">Delete</button>
      </div>

      <div v-else>
        <input v-model="editTitle">
        <button @click="save">Update</button>
        <button @click="isEditing = false">Cancel</button>
      </div>
    </div>

    <div v-else>
      <h2>404 Not Found</h2>
    </div>

    <RouterLink :to="{ name: 'tasks' }">Back to Tasks</RouterLink>
  </div>
</template>