<template>
  <form class="bubble__form bubble__form--input">
    <h1 class="bubble__question">{{ title.narrator }}</h1>

    <!-- Mister -->
    <label for="manName">Monsieur</label>
    <input type="text" name="manName" v-model="manName">
    <!-- Miss -->
    <label for="missName">Madame</label>
    <input type="text" name="missName" v-model="missName">

    <p
      v-show="alertBubble"
      class="bubble__alert"
    >Ce jeu est très sérieux. Remplissez les noms de monsieur et madame Zinzins</p>

    <!-- Choices -->
    <div
      class="button"
      v-for="button in buttons"
      @click="nameCharacters(manName, missName); sendFrame(button.nextFrame);"
      v-bind:key="button.type"
    >{{button.text}}</div>
  </form>
</template>

<script>
/* Data */
import { dataFile } from "../../js/blocs/declarations/declarationsData";
//

export default {
  data() {
    return {
      manName: null,
      missName: null,
      title: this.choice.title,
      buttons: this.choice.choices,
      alertBubble: false
    };
  },

  props: [`choice`],

  methods: {
    /*
     * Save the name of players
     */
    nameCharacters(manName, missName) {
      if (manName === null || missName === null) {
        this.alertBubble = true;
      } else {
        dataFile.UFO.characters.names.man =
          manName.charAt(0).toUpperCase() + manName.slice(1);
        dataFile.UFO.characters.names.woman =
          missName.charAt(0).toUpperCase() + missName.slice(1);
        this.alertBubble = false;
      }
    },
    //

    /*
     * Send select next frame
     */
    sendFrame(nextFrame) {
      nextFrame != null && this.alertBubble === false
        ? this.$emit(`sendFrame`, nextFrame[0].frame)
        : 0;
    }
    //
  }
};

//
</script>
