<template>
      <v-card 
        class="mx-auto px-6 py-8"
        width="500"
        >
        <v-card-title>Add Task</v-card-title>
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="title"
          :readonly="loading"
          :rules="[required]"
          density="compact"
          label="Title"
          clearable
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="description"
          rows="2"
          variant="filled"
          auto-grow
        ></v-textarea>
        <v-row>
          <v-col width="50%">
            <date-picker
            label="Date"
            v-model="startDate"
            color="primary"
            ></date-picker>
          </v-col>
          <v-col>
            <v-select
              :items="priority"
              density="compact"
              v-model="selectedValue"
              label="Priority"
            ></v-select>
          </v-col>
        </v-row>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
         Add Task
        </v-btn>
      </v-form>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/store/TaskStore'

const taskStore = useTaskStore()
const form = ref(false)
const title = ref(null)
const id = ref(0)
const description = ref(null)
const loading = ref(false)
const startDate = ref(null)
const selectedValue = ref(null)
const priority = ['High', 'Medium', 'Low']

const onSubmit = () => {
    if (!form.value) return
    id.value = id.value++
    console.log('Task obj',{
      title: title.value,
      description: description.value,
      id: id.value,
      date: startDate.value.toLocaleDateString("en"),
      priority: selectedValue.value,
      isCompleted: false,
    })
    taskStore.addTask({
      title: title.value,
      description: description.value,
      id: id.value,
      date: startDate.value.toLocaleDateString("en"),
      priority: selectedValue.value,
      isCompleted: false,
    })
    loading.value = true
    setTimeout(() => (loading.value = false), 1000)
    }
const required = (v) => {
        return !!v || 'Field is required'
      }
</script>

<style lang="scss" scoped>

</style>