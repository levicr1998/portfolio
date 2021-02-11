<template>
  <div id="project">
    <!-- Project section -->
    <div id="media-container" class="fluid-container">
      <router-link to="/">
        <div class="back-button-container">
          <img class="back-button" src="../../assets/img/icons/back-icon.svg" />
        </div>
      </router-link>
      <h2 class="title">Project Video</h2>
      <div>
        <video-player :videoId="project.videoId" />
      </div>
    </div>
    <div id="project-container" class="fluid-container">
      <div class="row w-100">
        <div class="col-md-8 offset-md-2">
          <h2 class="title">Project Details</h2>
          <div class="project-details-container fluid-container mx-auto">
            <div class="row">
              <div class="col-lg-6">
                <div class="project-info-items-container">
                  <h3 class="project-title">
                    {{ project.title }}
                  </h3>
                  <div class="project-items-container">
                    <div
                      class="project-info-item"
                      v-for="detail in project.details"
                      v-bind:key="detail"
                    >
                      {{ detail }}
                    </div>
                  </div>
                </div>
                <div class="project-company p-1">
                  <img
                    src="~@/assets/img/icons/company-icon.svg"
                    alt="Git hub icon"
                    class="icon"
                  />
                  <p class="my-auto pl-2">{{ project.company }}</p>
                </div>
                <h2 class="project-subtitle">Description</h2>
                <p class="project-description">
                  {{ project.description }}
                </p>
              </div>
              <div class="col-lg-6 d-flex flex-column">
                <h2 class="project-subtitle">Used technologies</h2>
                <skills-container
                  :skillNameEnabled="skillNameEnabled"
                  :skills="project.skills"
                  class="project-skills-container"
                />

                <div class="projects-links">
                  <a
                    v-show="project.links.github.enabled"
                    :href="project.links.github.link"
                  >
                    <img
                      src="~@/assets/img/icons/github-icon.svg"
                      alt="Git hub icon"
                      class="icon"
                    />
                  </a>
                  <a
                    v-show="project.links.live.enabled"
                    :href="project.links.live.link"
                    ><img
                      src="~@/assets/img/icons/link-icon.svg"
                      alt="Project link icon"
                      class="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#media-container {
  height: 100vh;
  width: 100%;
  background-color: $primary-color;
  overflow: hidden;
  position: relative;


  .back-button-container {
    background-color: $tertiary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 100%;
    border: $tertiary-color solid 0.2rem;
    margin: 2rem;
    transition: 0.5s;

    &:hover {
      background-color: $primary-color;
    }

    .back-button {
      width: 4rem;
      height: 4rem;

      &:hover {
        filter: invert(49%) sepia(26%) saturate(1900%) hue-rotate(163deg)
          brightness(102%) contrast(78%);
      }
    }
  }

  

  .title {
    color: $tertiary-color;
    text-align: center;
    margin: 2rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 40vh;
    bottom: -0.5%;
    left: 0;
    position: absolute;
    background: url(../../assets/img/project-details-container.svg);
    background-size: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  @media (min-width: $md) {
    .intro-title {
      padding: 2rem;
    }

    .intro-image {
      margin: 2rem;
    }
  }
}

#project-container {
  box-shadow: 0 4px 35px 0 rgba(45, 156, 219, 0.2);
  padding: 2rem 0.5rem;
  background-color: $tertiary-color;
  margin-top: -6rem;

    @media (max-width: $sm) {
    text-align: center;
    padding: 1rem;
  }
      .icon {
        width: clamp(1.5rem, 2vw, 1.9rem);
        height: auto;
      }

  .title {
    color: $primary-color;
    margin-bottom: 2rem;
  }

  .project-details-container {
    padding: 2rem;
    background-color: $primary-color;
    margin-bottom: 4rem;

    .project-info-items-container {
      display: flex;
      flex-flow: wrap;

           @media (max-width: $sm) {
          display: block;
        }

      .project-items-container {
        display: inline-flex;
        margin-left: 1rem;

        @media (max-width: $sm) {
          margin: 0.5rem auto;
        }

            .project-info-item {
        font-size: clamp(0.6rem, 1.5vw, 0.8rem) !important;
        border-radius: 0.5rem;
        font-weight: 600;
        color: $primary-color;
        background-color: $tertiary-color;
        padding: 0.3rem 0.5rem;
        margin: auto 0.2rem auto 0.2rem;
        height: fit-content;
      }
      }

      .project-title {
        color: $secondary-color;
        font-weight: 900 !important;
        margin: 0;
        font-size: clamp(1.8rem, 2.2vw, 3rem);
      }
    }

    .project-company {
      display: flex;
      color: $tertiary-color;
      font-weight: 600;
      margin:0.5rem 0;

      @media (max-width: $sm) {
        justify-content: center;
        margin:0.5rem;
      }
    }

    .project-subtitle {
      color: $secondary-color;
      font-size: clamp(0.9rem, 1.5vw, 1.3rem) !important;
      margin:1rem 0;

       @media (max-width: $sm) {
        margin:0.5rem;
      }
    }
    .project-description {
      color: $text-color;
    }


    .project-skills-container {
      margin: 0;

      &::v-deep .skill-items-container {
        width: 100%;
        margin: 0 !important;
      }
      &::v-deep .skill-items-container .skill-item {
        filter: none;
      }
    }

    .projects-links {
     align-items: flex-end;
     justify-content: flex-end;
     flex-grow: 1;
     display: flex;
    }
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
import VideoPlayer from "@/components/VideoPlayer";
import projectsJson from "../../assets/projects.json";

export default {
  components: {
    SkillsContainer,
    VideoPlayer,
  },
  data() {
    return {
      skillNameEnabled: false,
      project: "",
    };
  },
  beforeMount() {
    var projectId = this.$route.params.id;
    this.getProjectDetails(projectId);
  },
  methods: {
    getProjectDetails(projectId) {
      const projects = projectsJson;
      projects.forEach((proj) => {
        if (projectId == proj.id) {
          console.log(proj);
          this.project = proj;
        }
      });
    },
  },
};
</script>