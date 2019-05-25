<template>
  <section class="frame frame--home">
    <p class="text--about">
      Un projet de
      <a @click="link(`christina`)">Christina STEPHAN</a>
      et
      <a @click="link(`jean`)">Jean TOSTIVINT</a>
    </p>

    <section class="frame--text">
      <h1>
        Les zinzins
        <br>
        <span>de l'espace</span>
      </h1>
      <router-link class="frame__button" to="/Moon">C'est parti !</router-link>
    </section>

    <div class="alian alian--home alian--home--left alian--music alian--punk">
      <div class="alian__eye alian__eye--moving alian__eye--right">
        <div class="alian__glasses alian__glasses__connection"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--right"></div>
      <div class="alian__eye alian__eye--moving alian__eye--left">
        <div class="alian__glasses"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--left"></div>

      <div class="alian__hair"></div>
      <div class="alian__ear"></div>

      <div class="alian__head">
        <div class="alian__trache alian__trache--1"></div>
        <div class="alian__trache alian__trache--2"></div>

        <div class="alian__mouth alian__mouth--speaking"></div>
      </div>
    </div>

    <div class="alian alian--home alian--home--right alian--bureau">
      <div class="alian__eye alian__eye--moving alian__eye--right">
        <div class="alian__glasses alian__glasses__connection"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--right"></div>
      <div class="alian__eye alian__eye--moving alian__eye--left">
        <div class="alian__glasses"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--left"></div>

      <div class="alian__hair"></div>
      <div class="alian__ear"></div>

      <div class="alian__head">
        <div class="alian__trache alian__trache--1"></div>
        <div class="alian__trache alian__trache--2"></div>

        <div class="alian__mouth alian__mouth--speaking"></div>
      </div>
    </div>
  </section>
</template>

<script>
/* Data */
import { dataFile } from "../js/blocs/declarations/declarationsData";

export default {
  data() {
    return {};
  },

  methods: {
    link(name) {
      switch (name) {
        case `christina`:
          console.log("object");
          location.href = "http://www.christinastephan.com";
          break;
        case `jean`:
          console.log("object");
          location.href = "https://github.com/JyTosTT";
          break;
        default:
          alert(`The link is not working !`);
      }
    }
  },

  /*
   * Load animation
   */
  mounted: () => {
    dataFile.UFO.characters.animationsCharacters = [];
    dataFile.UFO.characters.items = {
      alcohol: false,
      oil: false,
      music: false,
      snack: null,
      route: null,
      money: null
    };
    dataFile.UFO.characters.jobSelect = null;
    dataFile.UFO.characters.names = { man: null, woman: null };
    localStorage.clear();
    this.$router.push({ path: "Moon" });
  }
  //
};
</script>
