<template>
  <section class="bubble__text bubble__form--choix">
    <audio class="bubble--songs">
      <source src="../../assets/ressources/music/button/song.mp3" type="audio/mp3">
    </audio>

    <!-- Title -->
    <h1
      v-show="emptyText(title.narrator)"
      class="bubble__question"
    >{{ titleTransform(title.narrator) }}</h1>
    <h2 v-show="emptyText(title.talk)" class="bubble__question">"{{ titleTransform(title.talk) }}"</h2>

    <!-- Choices -->
    <div
      class="button"
      v-for="button in buttons"
      @click="appeareance(button.animation); 
              animationRemove(button.animationRemove); 
              sendFrame(button.nextFrame, button.type);"
      v-bind:key="button.type"
    >{{button.text}}</div>
  </section>
</template>

<script>
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
      title: this.choice.title,
      buttons: this.choice.choices,
      phraseNames_man: null,
      phraseNames_clean: null,
      selectFrame: null
    };
  },

  props: [`choice`, `steps`],

  methods: {
    /*
     * Return names
     */
    titleTransform(phrase) {
      if (phrase) {
        this.phraseNames_man = phrase.replace(
          /{{ manName }}/g,
          dataFile.UFO.characters.names.man
        );
        this.phraseNames_clean = this.phraseNames_man.replace(
          /{{ missName }}/g,
          dataFile.UFO.characters.names.woman
        );
        return this.phraseNames_clean;
      }
    },
    //

    /*
     * Hide if the phrase is 'null"
     */
    emptyText(phrase) {
      switch (phrase) {
        case null:
          return false;
          break;
        default:
          return true;
      }
    },
    //

    /*
     * Send select next frame
     */
    sendFrame(nextFrame, selectType) {
      this.selectFrame = this.conditionFrame(nextFrame);
      this.choice.frame === `jobs`
        ? (dataFile.UFO.characters.jobSelect = selectType)
        : 0;
      nextFrame != null ? this.$emit(`sendFrame`, this.selectFrame) : 0;
    },
    //

    /*
     * Select the next good frame and call the function who define items
     */
    conditionFrame(nextFrame) {
      for (const select of nextFrame) {
        if (
          select.binding.value ===
            dataFile.UFO.characters.items[select.binding.type] ||
          select.binding.type === null
        ) {
          select.defineItems.length > 0
            ? storyClass.itemsDefine(select.defineItems)
            : 0;

          this.appeareance(select.animation);
          this.animationRemove(select.animationRemove);

          if (select.frame.search("/") === 0) {
            storyClass.endValue(this.steps);
            this.$router.push({
              path: select.frame.substring(1, select.frame.length)
            });
            return "jobs";
          }

          return select.frame;
          break;
        }
      }
    },
    //

    /*
     * Check if the array is empty, else call the function animationRemove
     */
    animationRemove(animation) {
      animation.length > 0 ? characterClass.removeAnimation(animation) : 0;
    },
    //

    /*
     * Load the appareance selected
     */
    appeareance(type) {
      /* document.querySelector(".bubble--songs").play = true; */
      type != null ? characterClass.animationAppear(type) : 0;
    }
    //
  },

  computed: {}
};
//
</script>
