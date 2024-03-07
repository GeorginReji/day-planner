// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import calendar from '../pages/calendar.vue'
import tasks from '../pages/tasks.vue'
import goals from '../pages/goals.vue'
import AddTask from '../pages/addTasks.vue';

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/calendar', 
    component: calendar 
  },
  { 
    path: '/tasks', 
    component: tasks 
  },
  { 
    path: '/goals', 
    component: goals 
  },
  {
    path: '/addTasks',
    component: AddTask
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
