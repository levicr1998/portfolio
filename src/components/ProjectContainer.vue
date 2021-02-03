<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-lg-6">
         <div class="project-info-items-container">
        <h3 class="project-title">
          {{ project.title }}
        </h3>
      <div class="project-info-item" v-for="detail in project.details" v-bind:key="detail">
      {{ detail }}
      </div>
    </div>
    <div class="project-company p-1">
      <img
              src="../assets/img/icons/company-icon.svg"
              alt="Git hub icon"
              class="icon"
          />
          <p class="my-auto pl-2"> {{ project.company }}</p>
    </div>
        <p class="project-description">
          {{ project.description }}
        </p>
        <skills-container
          :skillNameEnabled="skillNameEnabled"
          :skills="project.skills"
          class="project-skills-container"
        />
      <router-link :to="{ name: 'project', params: { id: 1 }}">   <button class="my-4"> Learn more </button> </router-link>
      </div>
      <div
        class="col-lg-6 col-xl-4 col-md-8 mx-md-auto pt-4 offset-xl-2 my-auto"
      >
        <img src="../assets/img/format-devices/screen-demo-feedme.svg" alt="Project image" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-fluid {
  box-shadow: 0 4px 35px 0 rgba(45, 156, 219, 0.2);
  padding: 2rem 0.5rem;
  background-color: $primary-color;

.project-info-items-container {
  display: flex;
  flex-flow: wrap;

    .project-title {
    color: $secondary-color;
    font-weight: 900 !important;
    margin: 0;
    font-size:clamp(1.8rem, 2.2vw, 3rem);
  }

  .project-info-item {
  font-size: clamp(0.6rem, 1.5vw, 0.8rem) !important;
  border-radius: 0.5rem;
  font-weight:600;
  color:$primary-color;
  background-color:$tertiary-color;
  padding: 0.3rem 0.5rem;
margin:auto 0.2rem auto 0.2rem;
  height: fit-content;
}
}

.project-description{
  color:$text-color;
}

.project-company{
  display: flex;
  color:$tertiary-color;
    font-weight:600;
}

  .project-skills-container {
    margin: 0;
    &::v-deep .skill-items-container {
      width: 100%;
    }
    &::v-deep .skill-items-container .skill-item {
      filter: none;
    }
  }
  .icon {
    width: clamp(1.5rem, 2vw, 1.9rem);
    height: auto;
  }

   button {
    width: auto;
    display: flex;
    padding: 0.4rem 0.8rem;
    font-size: 1.5rem;
    border: $primary-color solid 0.1rem;
    background: $tertiary-color;
    color: $primary-color;
    transition: 0.5s;

    &:hover {
      background-color: $primary-color;
      color: $tertiary-color;
      border: $tertiary-color solid 0.1rem;
    }
  }
}
</style>

<script>
import SkillsContainer from "@/components/SkillsContainer";
export default {
  components: {
    SkillsContainer,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      skillNameEnabled: false,
    };
  },
};
</script>