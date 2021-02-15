<template>
  <div class="not-found background-page">
    <h1>Error 404</h1>
    <h2>
      Deze pagina bestaat niet! <br />
      U wordt teruggebracht naar de hoofdpagina.
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.not-found {
  text-align: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  color: $primary-color;
  padding-top: 10vh;

  h1 {
    font-size: 2rem;
    font-weight: bolder;
    @media (min-width: $md) {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 1rem;
    width: 80%;
    font-family: "Roboto";
    font-weight: 300 !important;
    margin: 0 auto;

    @media (min-width: $md) {
      width: 60%;
      font-size: 2rem;
    }
  }
}

.background-page {
  height: 100vh;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    this.wait();
  },
  methods: {
    wait() {
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 2000);
    },
  },
};
</script>