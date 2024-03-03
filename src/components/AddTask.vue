<template>
            <v-card 
        class="mx-auto px-6 py-8"
        width="600"
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
          class="mb-2"
          label="Title"
          clearable
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="description"
          row-height="20"
          rows="2"
          variant="filled"
          auto-grow
        ></v-textarea>

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
import { ref } from 'vue';

const form = ref(false)
const title = ref(null)
const id = ref(0)
const description = ref(null)
const loading = ref(false)
const emit = defineEmits(['addTask'])

const onSubmit = () => {
    if (!form.value) return
    id.value = id.value++
    emit('addTask', {
        title: title.value,
        description: description.value,
        id: id.value,
        isCompleted: false
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