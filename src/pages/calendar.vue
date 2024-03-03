<template>
    <div>
        <v-sheet
      class="d-flex"
      height="54"
      tile
    >
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label="View Mode"
        variant="outlined"
        dense
        hide-details
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        label="weekdays"
        variant="outlined"
        dense
        hide-details
      ></v-select>
    </v-sheet>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDate } from 'vuetify'

    const type = ref('month')
    const types = ref(['month', 'week', 'day'])
    const weekday = ref([0, 1, 2, 3, 4, 5, 6])
    const weekdays = ref([
      { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
    ])
    const value = ref([new Date()])
    const events = ref([])
    const colors = ref(['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'])
    const titles = ref(['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'])

    const adapter = useDate()

    const getEvents = ({ start, end }) => {
      const newEvents = []

      const min = start
      const max = end
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = rnd(0, 3) === 0
        const firstTimestamp = rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        newEvents.push({
          title: titles.value[rnd(0, titles.value.length - 1)],
          start: first,
          end: second,
          color: colors.value[rnd(0, colors.value.length - 1)],
          allDay: !allDay,
        })
      }

      events.value = newEvents
    }

    // const getEventColor = (event) => {
    //   return event.color
    // }

    const rnd = (a, b) => {
      return Math.floor((b - a + 1) * Math.random()) + a
    }

    onMounted(() => {
      getEvents({
        start: adapter.startOfDay(adapter.startOfMonth(new Date())),
        end: adapter.endOfDay(adapter.endOfMonth(new Date()))
      })
    })
</script>

<style lang="scss" scoped>

</style>