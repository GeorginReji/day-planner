<template>
  <v-data-table-virtual :headers="headers" :items="taskStore.allTasks" item-value="name" width="500"
    show-select></v-data-table-virtual>
</template>

<script setup>
import { useTaskStore } from '@/store/TaskStore'

const taskStore = useTaskStore()

const headers = [
  { title: 'Task Title', align: 'space-around', key: 'title' },
  { title: 'Description', align: 'space-around', key: 'description' },
  { title: 'Date', align: 'space-around', key: 'date' },
  { title: 'Priority', align: 'space-around', key: 'priority' },
  { title: 'Status', align: 'space-around', key: 'isCompleted' },
];

</script>


<style lang="scss" scoped></style>