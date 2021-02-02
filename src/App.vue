<template>
  <div id="app">
    <the-header />
    <project-details />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ProjectDetails from '@/views/ProjectDetails/ProjectDetails.vue'
import HomePage from '@/views/HomePage/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    ProjectDetails,
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Roboto', sans-serif;
  color:$primary-color;
  background-color: $tertiary-color;
  top:0;
  left:0;
  padding: 0;
  margin: 0;
}
</style>
