<template>
  <v-data-table-virtual :headers="headers" :items="tasks" item-value="name" width="500"
    show-select></v-data-table-virtual>
</template>

<script setup>
import { watch, ref, defineProps } from 'vue';

const { allTask } = defineProps(['allTask']);

const headers = [
  { title: 'Task Title', align: 'start', key: 'title' },
  { title: 'Description', align: 'end', key: 'description' },
  { title: 'Date', align: 'end', key: 'date' },
  { title: 'Status', align: 'end', key: 'isCompleted' },
];

const tasks = ref([]);

watch(() => allTask, (newVal) => {
  tasks.value = newVal;
});
</script>


<style lang="scss" scoped></style>