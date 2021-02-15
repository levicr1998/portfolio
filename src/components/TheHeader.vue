<template>
  <div class="header">
    <header>
      <img
        data-aos="fade-in"
        data-aos-duration="1000"
        src="../assets/img/emoij-levi.svg"
      />
      <ul v-bind:class="[isOpen ? 'header-items open' : 'header-items']">
        <li
          data-aos="fade-in"
          data-aos-delay="400"
          @click="
            toggle(true);
            scrollToId('home');
          "
          class="header-item"
        >
          <router-link to="#home">HOME</router-link>
        </li>
        <li
          data-aos="fade-in"
          data-aos-delay="500"
          @click="
            toggle(true);
            scrollToId('about-me-container');
          "
          class="header-item"
        >
          <router-link to="#about-me-container">ABOUT</router-link>
        </li>
        <li
          data-aos="fade-in"
          data-aos-delay="600"
          @click="
            toggle(true);
            scrollToId('projects-container');
          "
          class="header-item"
        >
          <router-link to="#projects-container">PROJECTS</router-link>
        </li>
        <li
          data-aos="fade-in"
          data-aos-delay="700"
          @click="
            toggle(true);
            scrollToId('contact-container');
          "
          class="header-item"
        >
          <router-link to="#contact-container">CONTACT </router-link>
        </li>
      </ul>
      <button class="menu-button" v-if="isMobile" v-on:click="toggle(false)">
        <input type="checkbox" id="toggler" class="toggler" />
        <div class="hamburger"><div></div></div>
      </button>
    </header>
  </div>
</template>


<style lang="scss" scoped>
header {
  height: 3rem;
  z-index: 1;
  position: relative;

  img {
    width: 5rem;
    height: auto;
    margin: 1.5rem;
  }

  a {
    text-decoration: none;
    color: $primary-color;
  }

  ul {
    float: right;
  }
  // Navigation
  .menu-button {
    display: flex;
    margin-left: auto;
    padding: 1rem 1rem 1rem auto;
    background: none;
  }
  .header-items {
    margin: 2rem;
    width: auto;
    color: $primary-color;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    list-style-type: none;
    display: inline-flex;
    font-weight: 700;
    transition: all 1s ease-out;
    li {
      padding: 1rem;
    }
  }

  @media (max-width: $md) {
    img {
      display: none;
    }
  }

  @media (max-width: $sm) {
    a {
      color: $tertiary-color;
    }

    .header-items {
      margin: 0;
    }

    .toggler {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 3;
      cursor: pointer;
      width: 50px;
      height: 50px;
      opacity: 0;
    }

    .hamburger {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2;
      width: 60px;
      height: 60px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $quaternary-color;
      border-radius: 50%;
      margin: 0.5rem;
    }

    /* Hamburger Line */
    .hamburger > div {
      position: relative;
      flex: none;
      width: 100%;
      height: 2px;
      background: $primary-color;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
    }

    /* Hamburger Lines - Top & Bottom */
    .hamburger > div::before,
    .hamburger > div::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: inherit;
    }

    /* Moves Line Down */
    .hamburger > div::after {
      top: 10px;
    }

    /* Toggler Animation */
    .toggler:checked + .hamburger > div {
      transform: rotate(135deg);
      background-color: $primary-color;
    }

    /* Turns Lines Into X */
    .toggler:checked + .hamburger > div:before,
    .toggler:checked + .hamburger > div:after {
      top: 0;
      transform: rotate(90deg);
      background-color: $primary-color;
    }

    /* Rotate On Hover When Checked */
    .toggler:checked:hover + .hamburger > div {
      transform: rotate(225deg);
      background-color: $primary-color;
    }

    .toggler:checked ~ .menu > div {
      transform: scale(1);
      transition-duration: 0.3s;
    }

    .toggler:checked ~ .menu > div > div {
      opacity: 1;
      transition: opacity 0.4s ease 0.4s;
    }

    .toggler:checked ~ body {
      height: 100vh;
    }

    .header-items {
      background: $primary-color;
      color: $tertiary-color;
      align-items: center;
      position: fixed;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(10px at 90% -10%);
      -webkit-clip-path: circle(10px at 90% -10%);
      padding: 2rem;

      li {
        padding: 1rem;
      }
    }

    .header-items.open {
      clip-path: circle(1000px at 90% -10px);
      -webkit-clip-path: circle(1000px at 90% -10px);
      z-index: 2;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener("resize", this.checkMobileView);
  },
  methods: {
    toggle(statusChangeChecked) {
      this.isOpen = !this.isOpen;
      if (statusChangeChecked && this.isMobile) {
        document.getElementById("toggler").checked = false;
      }
    },
    scrollToId(id) {
      if (id == "projects-container") {
        const yOffset = 250;
        const element = document.getElementById(id);
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    },
    checkMobileView() {
      this.isMobile = screen.width < 576 ? true : false;
    },
  },
};
</script>