<template>
  <v-container>
    <v-row gutters="20" align="start">
      <v-col>
        <VDatePicker width="350" height="500" v-model="date" mode="dateTime" />
      </v-col>
      <v-col>
        <AddTask @addTask="updateTask"/>
      </v-col>
    </v-row>
    <v-row>
      <TaskTable v-bind="allTask"/>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const date = ref(new Date())
const allTask = ref([])
const updateTask = (task)=> {
  console.log('tasks',task);
  allTask.value.push({
    ...task,
    date: date.value
  })
  console.log('allTasks.value',allTask.value);
}
</script>

<style lang="scss">
.v-picker-title {
  display: none !important;
}

.v-date-picker-header {
  height: auto !important;
  padding-bottom: 0px !important;
}
</style>