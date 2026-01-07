<template>
  <h1>Dashboard</h1>
  <RouterLink :to="{ name: 'tasks'}">Go to Tasks</RouterLink> |
  <RouterLink :to="{ name: 'tasksManager' }">Go to Tasks Manager</RouterLink>
</template>