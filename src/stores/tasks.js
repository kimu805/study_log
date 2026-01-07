import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const STORAGE_KEY = "vue3-tasks"

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref(loadTasks())
  
  function loadTasks() {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Vue3の基礎復習', isCompleted: false },
      { id: '2', title: 'Composition APIの理解', isCompleted: false },
      { id: '3', title: 'ref と reactive の違い', isCompleted: true },
      { id: '4', title: 'computed の使い方', isCompleted: false },
      { id: '5', title: 'watch / watchEffect の理解', isCompleted: false },
      { id: '6', title: 'コンポーネント分割', isCompleted: true },
      { id: '7', title: 'props と emit', isCompleted: false },
      { id: '8', title: 'Vue Router 基礎', isCompleted: true },
      { id: '9', title: 'ルーティング設計を考える', isCompleted: false },
      { id: '10', title: 'Pinia の state 理解', isCompleted: true },
      { id: '11', title: 'Pinia の getters 実装', isCompleted: false },
      { id: '12', title: 'Pinia の actions 実装', isCompleted: false },
      { id: '13', title: 'LocalStorage 永続化調査', isCompleted: false },
      { id: '14', title: '学習ログ設計を考える', isCompleted: false },
      { id: '15', title: 'Dashboard画面作成', isCompleted: false },
      { id: '16', title: 'Stats画面の集計ロジック', isCompleted: false },
      { id: '17', title: 'UIコンポーネント整理', isCompleted: false },
      { id: '18', title: 'エラーハンドリング整理', isCompleted: false },
      { id: '19', title: 'コードリファクタリング', isCompleted: false },
      { id: '20', title: 'README作成', isCompleted: false }
    ]
  }

  watch(tasks, (newTasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks))
  }, { deep: true })

  const addTask = (title) => {
    if (!title) return 

    tasks.value.push({
      id: Date.now().toString(),
      title,
      isCompleted: false
    })
  }

  const toggleComplete = (id) => {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      return task.isCompleted = !task.isCompleted
    }
  }

  const completedTasks = computed(() => {
    return tasks.value.filter(task => task.isCompleted)
  })

  const activeTasks = computed(() => {
    return tasks.value.filter(task => !task.isCompleted)
  })

  const updateTaskTitle = (id, newTitle) => {
    if (!newTitle) return
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.title = newTitle
    }
  }

  const removeTask = (id) => {
    return tasks.value = tasks.value.filter(task => task.id !== id)
  }

  const totalCount = computed(() => {
    return tasks.value.length
  })

  const completedCount = computed(() => {
    return tasks.value.filter(task => task.isCompleted).length
  })

  const activeCount = computed(() => {
    return tasks.value.filter(task => !task.isCompleted).length
  })

  const completionRate = computed(() => {
    if (totalCount.value === 0) return 0
    return Math.round(
      (completedCount.value / totalCount.value) * 100
    )
  })

  return {
    tasks,
    toggleComplete,
    completedTasks,
    activeTasks,
    addTask,
    updateTaskTitle,
    removeTask,
    totalCount,
    completedCount,
    activeCount,
    completionRate
  }
})