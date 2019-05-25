<template>
  <section v-show="initialization" class="frame frame--1">
    <Planete></Planete>
    <Ship></Ship>
    <Bubble v-show="toggle" :choice="select" @sendFrame="sendFrame"></Bubble>
    <Stars style="z-index:-100"></Stars>
    <Peage></Peage>
    <Waysign></Waysign>
    <Blockard></Blockard>
    <Pirate></Pirate>
    <Police></Police>
    <Panne></Panne>
    <Jail></Jail>
    <Speaker></Speaker>
  </section>
</template>

<script>
/* Elements */
import Peage from "../decors/Peage.vue";
import Planete from "../decors/Planete.vue";
import Jail from "../decors/Jail.vue";
import Stars from "../decors/Stars.vue";
import Waysign from "../decors/Waysign.vue";
import Bubble from "../elements/Bubble.vue";
import Speaker from "../elements/Speaker.vue";
import Blockard from "../decors/Blockard.vue";

//

/* Characters */
import Ship from "../characters/ship.vue";
import Pirate from "../characters/Pirate.vue";
import Police from "../characters/Police.vue";
import Panne from "../characters/Panne.vue";
//

/* Classes */
import characterClass from "../../services/character.js";
import storyClass from "../../services/story.js";
//

/* Data */
import { dataFile } from "../../js/blocs/declarations/declarationsData";
//

export default {
  data() {
    return {
      toggle: true,
      select: {
        frame: null,
        title: null,
        choices: null
      }
    };
  },

  components: {
    Planete,
    Bubble,
    Ship,
    Peage,
    Stars,
    Waysign,
    Blockard,
    Pirate,
    Police,
    Panne,
    Jail,
    Speaker
  },

  methods: {
    /*
     * Load the nextFrame
     */
    sendFrame(nextFrame) {
      this.select.frame = nextFrame;
      this.select.title =
        dataFile.story[nextFrame].title[dataFile.UFO.characters.jobSelect];
      this.select.choices =
        dataFile.story[nextFrame].choices[dataFile.UFO.characters.jobSelect];

      this.saveProgress(nextFrame);
    },

    /*
     * Save the game in the local storage
     */
    saveProgress(nextFrame) {
      localStorage.setItem(
        `GAMEMEMORY`,
        JSON.stringify(dataFile.UFO.characters)
      );
      localStorage.setItem(`ONGOING`, JSON.stringify(nextFrame));

      /* DEVELOPER MODE */
      /* localStorage.clear(); */
      /* DEVELOPER MODE */
    }
    //
  },

  computed: {
    /*
     * Select the first frame of the game
     */
    initialization() {
      let frameActive = JSON.parse(localStorage.getItem(`ONGOING`));
      let memoryActive = JSON.parse(localStorage.getItem(`GAMEMEMORY`));
      memoryActive ? (dataFile.UFO.characters = memoryActive) : 0;
      frameActive
        ? (this.select = {
            frame: frameActive,
            title:
              dataFile.story[frameActive].title[
                dataFile.UFO.characters.jobSelect
              ],
            choices: dataFile.story[frameActive].choices[memoryActive.jobSelect]
          })
        : (this.select = {
            frame: `jobs`,
            title: dataFile.story.jobs.title.accountant,
            choices: dataFile.story.jobs.choices.default
          });
      return true;
    }
    //
  },

  /*
   * Load animation
   */
  mounted: () => {
    characterClass.initializationAnimation();
  }
  //
};
//
</script>