<template>
  <div id="home">
    <!-- Intro section -->
    <div id="intro-container" class="container">
      <div class="row h-100 w-100">
        <div class="col my-auto">
          <h1 class="intro-title">Welcome. I'm Levi. I'm a <b class="highlighted"> Developer.</b></h1>
        </div>
        <div class="col my-auto">
          <img
            src="../../assets/img/intro-image.png"
            alt="Levi Crietee"
            class="intro-image"
          />
        </div>
      </div>
    </div>
    <!-- About me section -->
    <div id="about-me-container" class="container">
      <div class="row">
        <div class="col-6">
          <h2 class="title">About me</h2>
          <p>
            My name is Levi. I’m currently studying ICT & Software engineering.
            I like to build website’s. I’m a person who is motivated and excited
            to learn new things.
          </p>
          <button>Download resume</button>
        </div>
        <div class="col-6">
          <skills-container :skills="languages" skillName="Used languages" />
          <skills-container :skills="frameworks" skillName="Used frameworks" />
          <skills-container :skills="tools" skillName="Used tools" />
        </div>
      </div>
    </div>
    <!-- Projects section -->
    <div id="projects-container" class="container">
      <div class="row">
        <div class="col-9">
          <h2 class="title">My projects</h2>
          <project-container :project="project" />
          <button> View all projects</button>
        </div>
      </div>
    </div>
    <!-- Contact section -->
      <div id="contact-container" class="container">
      <div class="row">
        <div class="col-9">
          <h2 class="title">Contact me</h2>
          <p> Feel free to send me a message!</p>
          <button> <img src="" alt=""> Get in touch </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#intro-container{
    height: calc(100vh - 3rem);
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
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
     skills: ["HTML", "CSS/SCSS", "Javascript", "Java", "PHP", "C#", "SQL"],
     image: require("@/assets/img/project-picture.png")
     },
    };
  },
};
</script>