<template>
  <div class="loading-background">
    <div class="loading-container">
      <img class="loader" src="../assets/img/icons/spinning-circles.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.loader {
  width: 5rem;
  height: auto;
}

.loading-background {
  height: 100vh;

  .loading-container {
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>