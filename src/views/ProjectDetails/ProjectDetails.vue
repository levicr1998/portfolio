<template>
  <div id="project">
    <!-- Project section -->
    <router-link to="/">
      <div
        class="back-button-container"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <img class="back-button" src="../../assets/img/icons/back-icon.svg" />
      </div>
    </router-link>
    <div
      id="media-container"
      class="fluid-container video-container-height"
      :class="{ 'no-video-container-height': !project.demoVideoEnabled }"
    >
      <h2
        class="title"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="1000"
        v-if="project.demoVideoEnabled"
      >
        Project Video
      </h2>
      <div>
        <video-player
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
          :videoId="project.videoId"
          v-if="project.demoVideoEnabled"
        />
      </div>
    </div>
    <div id="project-container" class="fluid-container">
      <div class="row w-100">
        <div class="col-md-8 offset-md-2">
          <h2 class="title" data-aos="fade-in" data-aos-duration="1000">
            Project Details
          </h2>
          <div
            class="project-details-container fluid-container mx-auto"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
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
              <div class="col-lg-6 d-flex flex-column p-0 p-md-2">
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
#app {
  background-color: $primary-color;
}
#project {
  background: $primary-color;

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

    @media (max-width: $sm) {
      margin: 0.5rem;
    }

    .back-button {
      width: 60px;
      height: 60px;

      &:hover {
        filter: invert(49%) sepia(26%) saturate(1900%) hue-rotate(163deg)
          brightness(102%) contrast(78%);
      }
    }
  }

  .video-container-height {
    height: 100vh;

    @media (max-height: $max-height-phone) {
      height: 220vh;
    }

    @media (max-width: $sm) {
      height: 50rem;
    }
  }

  .no-video-container-height {
    height: 30vh;

    @media (max-height: $max-height-phone) {
      height: 30vh;
    }

    @media (max-width: $sm) {
      height: 15rem;
    }
  }

  #media-container {
    width: 100%;
    background-color: $primary-color;
    overflow: hidden;
    position: relative;

    .title {
      color: $tertiary-color;
      text-align: center;
      margin: 2rem;
    }

    &::after {
      content: "";
      width: 100%;
      height: 30vh;
      left: 0;
      bottom: -0.5%;
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

      @media (max-height: $max-height-phone) {
        margin-top: 2rem;
      }

      @media (max-height: $md) {
        margin-top: 3rem;
      }
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
        margin: 0.5rem 0;

        @media (max-width: $sm) {
          justify-content: center;
          margin: 0.5rem;
        }
      }

      .project-subtitle {
        color: $secondary-color;
        font-size: clamp(0.9rem, 1.5vw, 1.3rem) !important;
        margin: 1rem 0;

        @media (max-width: $sm) {
          margin: 0.5rem;
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
}
</style>
<script>
import SkillsContainer from "@/components/SkillsContainer";
import VideoPlayer from "@/components/VideoPlayer";

export default {
  components: {
    SkillsContainer,
    VideoPlayer,
  },
  data() {
    return {
      skillNameEnabled: false,
      isLoaded:false,
      project: {},
    };
  },
  mounted() {
    this.getProjectDetails();
  },
  methods: {
    getProjectDetails() {
      this.$emit("set-loading-state");
      var projectId = this.$route.params.id;
      this.contentful.getEntry(projectId).then((response) => {
        this.project = response.fields;
         this.$emit("set-loading-state");
        this.isLoaded = true;
      });
    },
  },
};
</script>