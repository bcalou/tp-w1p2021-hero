<template>
  <section class="frame frame--end">
    <p class="text--about">
      Un projet de
      <a @click="link(`christina`)">Christina STEPHAN</a>
      et
      <a @click="link(`jean`)">Jean TOSTIVINT</a>
    </p>

    <div class="box">
      <h1>
        GAME OVER
        <br>
        en {{ steps }} étapes
      </h1>
      <p>Tu n'as pas eu de chance ! Peut être que la prochaine fois tu arriveras à destination</p>

      <div v-on:click="restartGame()" class="button">Recommencer</div>
    </div>

    <div class="alian alian--home alian--end alian--home--left alian--punk">
      <div class="alian__eye alian__eye--sleeping alian__eye--right">
        <div class="alian__glasses alian__glasses__connection"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--right"></div>
      <div class="alian__eye alian__eye--sleeping alian__eye--left">
        <div class="alian__glasses"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--left"></div>

      <div class="alian__hair"></div>
      <div class="alian__ear"></div>

      <div class="alian__head">
        <div class="alian__trache alian__trache--1"></div>
        <div class="alian__trache alian__trache--2"></div>

        <div class="alian__mouth"></div>
      </div>
    </div>

    <div class="alian alian--home alian--end alian--home--right alian--bureau">
      <div class="alian__eye alian__eye--sleeping alian__eye--right">
        <div class="alian__glasses alian__glasses__connection"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--right"></div>
      <div class="alian__eye alian__eye--sleeping alian__eye--left">
        <div class="alian__glasses"></div>
      </div>
      <div class="alian__eye__connection alian__eye__connection--left"></div>

      <div class="alian__hair"></div>
      <div class="alian__ear"></div>

      <div class="alian__head">
        <div class="alian__trache alian__trache--1"></div>
        <div class="alian__trache alian__trache--2"></div>

        <div class="alian__mouth"></div>
      </div>
    </div>
  </section>
</template>

<script>
/* Data */
import { dataFile } from "../../js/blocs/declarations/declarationsData";
//

/* Classes */
import storyClass from "../../services/story.js";
//

export default {
  data() {
    return {
      steps: JSON.parse(localStorage.getItem(`NUMBERSTEPS`))
        ? JSON.parse(localStorage.getItem(`NUMBERSTEPS`))
        : storyClass.numberSteps
    };
  },

  components: {},

  methods: {
    restartGame() {
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
    },

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

  computed: {},

  mounted: () => {}
};
//
</script>