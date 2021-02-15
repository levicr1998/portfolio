<template>
  <div class="player-container">
    <youtube
      :video-id="videoId"
      :player-vars="playerVars"
      @playing="playing"
    ></youtube>
  </div>
</template>
<style lang="scss" scoped>
.player-container {
  margin: 0 auto;
  width: fit-content;
}

@media (max-width: $sm) {
  .player-container ::v-deep iframe {
    width: 90vw;
    height: 20rem;
  }
}
</style>
<script>
export default {
  name: "VideoPlayer",
  props: {
    videoId: String,
  },
  data() {
    return {
      resize: true,
      playerVars: {
        autoplay: 1,
      },
    };
  },
  methods: {
    playing() {},
  },
};
</script>