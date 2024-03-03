<template>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            subtitle="georginreji@gmail.com"
            title="Georgin Reji"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <router-link to="/">
                <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
            </router-link>
            <router-link to="/tasks">
                <v-list-item prepend-icon="mdi-checkbox-marked-outline" title="Tasks" value="tasks"></v-list-item>
            </router-link>
            <router-link to="/calendar">
                <v-list-item prepend-icon="mdi-calendar" title="Calendar" value="events"></v-list-item>
            </router-link>
            <router-link to="/goals">
                <v-list-item prepend-icon="mdi-soccer" title="Goals" value="goal"></v-list-item>
            </router-link>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>