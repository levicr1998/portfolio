<template>
  <div id="app">
    <div v-if="!isLoaded" class="loading-background">
      <div class="loading-container">
      <loader></loader>
      </div>
    </div>
    <div v-else>
      <the-header
        v-show="
          ['home'].includes($route.name) && !['not-found'].includes($route.name)
        "
      />
      <router-view />
      <the-footer v-show="!['not-found'].includes($route.name)" />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    Loader
  },
  data(){
    return {
      isLoaded:false
    };
  },
  mounted(){
    this.loadingView();
  },
  methods: {
    loadingView() {
      setTimeout(() => {
     this.isLoaded = true;
      }, 1000);
    },
  },
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

.loading-background {
  height: 100vh;

  .loading-container{
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
