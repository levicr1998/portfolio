<template>
  <div id="app">
    <the-header />
    <home-page />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomePage from '@/views/HomePage/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
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
