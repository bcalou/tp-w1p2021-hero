<template>
  <section class="frame frame--end frame--win">
    <p class="text--about">
      Un projet de
      <a @click="link(`christina`)">Christina STEPHAN</a>
      et
      <a @click="link(`jean`)">Jean TOSTIVINT</a>
    </p>

    <div class="ziel">
      <div class="drapeau drapeau--1">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="drapeau drapeau--2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="box">
      <h1>
        Tu as gagné
        <br>
        en {{ steps }} étapes
      </h1>
      <p>Bien joué ! tu peux être très fier de toi</p>

      <div v-on:click="restartGame()" class="button">Recommencer</div>
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