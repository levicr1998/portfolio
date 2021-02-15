<template>
  <div class="skills-container">
    <h4 v-if="skillNameEnabled">{{ skillName }}</h4>
    <div class="skill-items-container">
      <div class="skill-item" v-for="skill in skills" v-bind:key="skill">
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skillName: String,
    skillNameEnabled: {
      type: Boolean,
      default: true,
    },
    skills: Array,
  },
};
</script>
<style lang="scss" scoped>
.skills-container {
  margin: 2rem;

  h4 {
    color: $tertiary-color;
  }
  @media only screen and (max-width: $xl) {
    margin: 2rem 0;
  }
}
.skill-items-container {
  display: flex;
  width: 80%;
  flex-flow: wrap;

  @media (max-width: $sm) {
    justify-content: center;
    margin: 1rem auto;
  }
}
.skill-item {
  border: $tertiary-color solid 0.1rem;
  border-radius: 0.5rem;
  color: $tertiary-color;
  margin: 0.2rem;
  padding: 0.1rem 0.5rem;
}
</style>