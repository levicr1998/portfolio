<template>
  <div id="home">
    <!-- Projects section -->
    <div id="media-container" class="fluid-container">
         <h2 class="title">Project Media</h2>
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
                  <div
                    class="project-info-item"
                    v-for="detail in project.details"
                    v-bind:key="detail"
                  >
                    {{ detail }}
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
              <div class="col-lg-6">
                <h2 class="project-subtitle">Used technologies</h2>
                <skills-container
                  :skillNameEnabled="skillNameEnabled"
                  :skills="project.skills"
                  class="project-skills-container"
                />

                    <div class="projects-links">
                  <a
                    ><img
                      src="~@/assets/img/icons/github-icon.svg"
                      alt="Git hub icon"
                      class="icon"
                  /></a>
                  <a
                    ><img
                      src="~@/assets/img/icons/link-icon.svg"
                      alt="Project link icon"
                      class="icon"
                  /></a>
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

.title{
  color:$tertiary-color;
  text-align: center;
  margin:4rem;
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

.title {
  color: $primary-color;
}

#project-container {
  box-shadow: 0 4px 35px 0 rgba(45, 156, 219, 0.2);
  padding: 2rem 0.5rem;
  background-color: $tertiary-color;
  margin-top:-6rem;

  .project-info-items-container {
    display: flex;
    flex-flow: wrap;

    .project-title {
      color: $secondary-color;
      font-weight: 900 !important;
      margin: 0;
      font-size: clamp(1.8rem, 2.2vw, 3rem);
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

.project-details-container{
    padding: 2rem;
}

  .project-subtitle {
    color: $secondary-color;
    font-size: clamp(0.9rem, 1.5vw, 1.3rem) !important;
  }
  .project-description {
    color: $text-color;
  }

  .project-company {
    display: flex;
    color: $tertiary-color;
    font-weight: 600;
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
    float: right;
   margin-top:4rem;
    width: auto;
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

.project-details-container {
  background-color: $primary-color;
  margin-bottom: 4rem;
}
</style>
<script>
import SkillsContainer from "@/components/SkillsContainer";
export default {
  components: {
    SkillsContainer,
  },
  data() {
    return {
      skillNameEnabled: false,
      languages: ["HTML", "CSS/SCSS", "Javascript", "Java", "PHP", "C#", "SQL"],
      frameworks: ["Springboot", "Angular", "Vue.js"],
      tools: ["Git & GitHub", "Adobe XD", "Figma", "Postman"],
      project: {
        title: "FeedMe",
        details: ["2019", "School project"],
        company: "Fontys",
        description:
          "FeedMe is an order webapp for restaurants with the posibility to order food in a tinder way. The app is made as an PWA to make it easy accesible on your phone.",
        skills: [
          "HTML",
          "CSS",
          "Javascript",
          "Java",
          "Angular",
          "Springboot",
          "CI/CD",
          "PWA",
          "SQL",
        ],
        thumbnail: {
          isMobile: true,
          image: require("@/assets/img/project-picture.png"),
        },
        image: require("@/assets/img/project-picture.png"),
      },
    };
  },
};
</script>