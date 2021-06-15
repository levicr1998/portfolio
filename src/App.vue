<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  color: $primary-color;
  background-color: $tertiary-color;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}
</style>
