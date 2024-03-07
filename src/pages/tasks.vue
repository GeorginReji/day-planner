<template>
  <v-container>
      <TaskTable v-bind="allTask"/>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const allTask = ref([])
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