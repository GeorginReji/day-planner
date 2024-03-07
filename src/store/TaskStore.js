// Utilities
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore', {
  state: () => ({
    tasks: []
  }),
  getters: {
    allTasks() {
      return this.tasks
    }
  },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    }
  }
})
