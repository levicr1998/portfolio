<template>
  <div id="home">
    <!-- Intro section -->
    <div id="intro-container" class="fluid-container">
      <div class="row h-75">
        <div
          class="col-8 offset-2 col-sm-6 offset-sm-3 col-xl-3 offset-xl-2 col-md-4 offset-md-1 my-auto text-md-left text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h1 class="intro-title">
            Welcome, <br />
            I'm Levi. <br />
            I'm a <b class="highlighted"> {{ typeValue }}</b>
            <span class="cursor" :class="{ typing: typeStatus }"> &nbsp;</span>
          </h1>
        </div>
        <div
          class="col-8 offset-2 col-sm-6 offset-sm-3 col-xl-3 offset-md-2 col-md-4 my-auto"
        >
          <img
            src="../../assets/img/intro-image.png"
            alt="Levi Crietee"
            class="img-fluid intro-image"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom">
        </div>
      </div>
    </div>
    <!-- About me section -->
    <div id="about-me-container" class="fluid-container">
      <div class="row">
        <div
          class="col-lg-3 offset-lg-2 col-sm-8 offset-sm-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 class="title pt-4">About me</h2>
          <p>
            Hi, my name is Levi Crietee. I’m a passionated ICT & Software
            Engineering student at Fontys. <br />
            <br />
            I like to learn new things and challenge myself by working with new
            advanced technologies. <br />
            <br />
            I’m a motivated and positive person. I like to work in a team and
            improve myself daily by the feedback of my team members and new
            things I learned that day.
          </p>
          <a href="/Curriculum_Vitae.pdf" download="Curriculum Vitae.pdf">
            <button class="my-4">Download resume</button>
          </a>
        </div>
        <div
          class="offset-sm-2 col-lg-3 offset-lg-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
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
          <h2
            class="title"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            My projects
          </h2>
          <div v-for="project in projectsToLoad" v-bind:key="project.id">
            <project-container
              :project="project"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-mirror="true"
            />
          </div>
          <button
            class="mx-auto"
            data-aos="fade-left"
            data-aos-duration="1000"
            @click="toggleLoadProjects()"
          >
            <div v-if="this.isLoading">
              <img
                class="button-loading"
                src="../../assets/img/icons/three-dots-loading.svg"
              />
            </div>
            <div v-else>
              {{
                loadedMoreProjects === false ? "Show all projects" : "Show less"
              }}
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- Contact section -->
    <div id="contact-container" class="fluid-container">
      <div class="row" data-aos="zoom-in" data-aos-duration="1000">
        <div
          class="col-xl-6 col-sm-8 offset-sm-2 col-10 offset-1 offset-xl-3 contact-box my-auto"
        >
          <h2 class="title">Contact me</h2>
          <p class="text-color">Feel free to send me a message!</p>
          <a href="mailto: levicrietee@hotmail.com">
            <button>
              <img src="../../assets/img/icons/send.svg" alt="Send Icon" />
              <span class="d-inline-block">Get in touch </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#app {
  background-color:$tertiary-color;
}

#intro-container {
  height: 100vh;
  width: 100%;
  background-color: $tertiary-color;
  overflow: hidden;
  position: relative;

    @media (max-height: $max-height-phone) {
 height:160vh;
    }

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

  span.cursor {
    display: inline-block;
    width: 2px;
    margin-left: 0.1rem;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
    height: clamp(2rem, 2.5vw, 3.5rem);
    vertical-align: middle;
  }

  span.cursor.typing {
    animation: none;
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
#about-anchor {
  padding-top: 0vh;
}
#about-me-container {
  background: $primary-color;
  color: $text-color;
  position: relative;
  scroll-margin-top: 10rem;

  @media (max-width: $sm) {
    padding: 1rem;
    text-align: center;
  }

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

  @media (max-width: $sm) {
    text-align: center;
    padding-top: 20rem !important;
  }

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

    div p {
      margin: 0;
    }

    .button-loading {
      width: 30%;
      height: auto;
    }

    &:hover,
    &:active,
    &:focus {
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

  @media (max-width: $sm) {
    text-align: center;
  }

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
import projects from "../../assets/projects.json";
import SkillsContainer from "@/components/SkillsContainer.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";
export default {
  components: {
    SkillsContainer,
    ProjectContainer,
  },
  data() {
    return {
      isLoading: false,
      loadedMoreProjects: false,
      projects: projects,
      typeValue: "Developer",
      typeStatus: false,
      typeArray: ["Developer", "Motivator", "Teamplayer", "Adventurer"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      charIndex: 0,
      languages: ["HTML", "CSS/SCSS", "Javascript", "Java", "PHP", "C#", "SQL"],
      frameworks: ["Springboot", "Angular", "Vue.js", "Symfony", "Capacitor"],
      tools: [
        "Git & GitHub",
        "Adobe XD",
        "Figma",
        "Postman",
        "DevOps",
        "Trello",
      ],
    };
  },
  computed: {
    projectsToLoad: function () {
      if (!this.loadedMoreProjects) {
        return this.projects.slice(0, 3);
      } else {
        return this.projects;
      }
    },
  },
  methods: {
    toggleLoadProjects() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
      setTimeout(() => {
        this.loadedMoreProjects = !this.loadedMoreProjects;
      }, 200);
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    this.charIndex = 9;
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>