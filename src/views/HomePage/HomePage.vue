<template>
  <div id="home">
    <!-- Intro section -->
    <div id="intro-container" class="fluid-container">
      <div class="row h-75">
        <div
          class="col-8 offset-2 col-sm-6 offset-sm-3 col-xl-3 offset-xl-2 col-md-4 offset-md-1 my-auto text-md-left text-center"
        >
          <h1 class="intro-title">
            Welcome. I'm Levi. I'm a <b class="highlighted"> Developer.</b>
          </h1>
        </div>
        <div
          class="col-8 offset-2 col-sm-6 offset-sm-3 col-xl-3 offset-md-2 col-md-4 my-auto"
        >
          <img
            src="../../assets/img/intro-image.png"
            alt="Levi Crietee"
            class="img-fluid intro-image"
          />
        </div>
      </div>
    </div>
    <!-- About me section -->
    <div id="about-me-container" class="fluid-container">
      <div class="row">
        <div class="col-lg-3 offset-lg-2 col-8 offset-2">
          <h2 class="title pt-4">About me</h2>
          <p>
            My name is Levi. I’m currently studying ICT & Software engineering.
            I like to build website’s. I’m a person who is motivated and excited
            to learn new things.
          </p>
          <button class="my-4">Download resume</button>
        </div>
        <div class="offset-2 col-lg-3 offset-lg-4">
          <skills-container :skills="languages" skillName="Used languages" />
          <skills-container :skills="frameworks" skillName="Used frameworks" />
          <skills-container :skills="tools" skillName="Used tools" />
        </div>
      </div>
    </div>
    <!-- Projects section -->
    <div id="projects-container" class="fluid-container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2 col-10 offset-1">
          <h2 class="title">My projects</h2>
          <project-container :project="project" />
          <button class="mx-auto">View all projects</button>
        </div>
      </div>
    </div>
    <!-- Contact section -->
    <div id="contact-container" class="fluid-container">
      <div class="row">
        <div
          class="col-xl-6 col-sm-8 offset-sm-2 col-10 offset-1 offset-xl-3 contact-box my-auto"
        >
          <h2 class="title">Contact me</h2>
          <p class="text-color">Feel free to send me a message!</p>
          <button>
            <img src="../../assets/img/icons/send.svg" alt="Send Icon" />
            <span class="d-inline-block">Get in touch </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#intro-container {
  height: 100vh;
  width: 100%;
  background-color: $tertiary-color;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 40vh;
    bottom: -0.5%;
    left: 0;
    position: absolute;
    background: url(../../assets/img/aboutme-curve-container.svg);
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

#about-me-container {
  background: $primary-color;
  color: $text-color;
  position: relative;

  .title {
    color: $tertiary-color;
  }

  button {
    background-color: $primary-color;
    color: $tertiary-color;
    border: $tertiary-color solid 0.1rem;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    transition: 0.5s;

    &:hover {
      background-color: $tertiary-color;
      color: $primary-color;
      border: $primary-color solid 0.1rem;
    }
  }
}

#projects-container {
  padding-top: 30rem;
  padding-bottom: 20rem;
  overflow: hidden;
  position: relative;

  .title {
    color: $primary-color;
  }
  button {
    width: auto;
    display: flex;
    padding: 0.5rem 1rem;
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

  &::before {
    content: "";
    width: 100%;
    height: 40vh;
    top: -0.5%;
    left: 0;
    position: absolute;
    background: url(../../assets/img/aboutme-curve-container.svg);
    transform: rotate(180deg);
    background-size: cover;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media (max-width: $lg) {
    padding-top: 25rem;
  }
}
#contact-container {
  background-color: $primary-color;

  .contact-box {
    transform: translateY(-50%);
    box-shadow: 0 4px 35px 0 rgba(45, 156, 219, 0.2);
    background: $primary-color;
    padding: 4rem;

    & > * {
      margin: 2rem;
    }

    @media (max-width: 576px) {
      padding: 1rem;
      & > * {
        margin: 1rem;
      }

      button {
        margin: 0.5rem 1rem !important;
      }
    }

    .title {
      color: $tertiary-color;
    }

    button {
      background: $primary-color;
      color: $tertiary-color;
      border: $tertiary-color solid 0.1rem;
      transition: 0.4s;
      font-size: 1.2rem;
      margin: 0.5rem 2rem;
      &:hover {
        background: $tertiary-color;
        color: $primary-color;
        border: $tertiary-color solid 0.1rem;
        span {
          animation-name: movebackwards;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
        }
      }

      &:hover img {
        animation-name: moveforwards;
        animation-fill-mode: forwards;
        animation-duration: 0.4s;
      }
      img {
        height: auto;
        width: 1.5rem;
        margin-bottom: 0.1rem;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
<script>
import SkillsContainer from "@/components/SkillsContainer.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";
export default {
  components: {
    SkillsContainer,
    ProjectContainer,
  },
  data() {
    return {
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
        isMobile:true,
        image:require("@/assets/img/project-picture.png"),
        },
        image: require("@/assets/img/project-picture.png"),
      },
    };
  },
};
</script>