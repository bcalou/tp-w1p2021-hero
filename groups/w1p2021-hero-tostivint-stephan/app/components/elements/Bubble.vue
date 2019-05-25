<template>
  <section class="bubble">
    <TextBubble
      v-if="selectComponent() === 'choice'"
      :key="componentKey"
      @sendFrame="sendFrame"
      :choice="select"
      :steps="componentKey"
    ></TextBubble>
    <FormBubble v-else :key="componentKey" @sendFrame="sendFrame" :choice="select"></FormBubble>
  </section>
</template>

<script>
/* Script */
import character from "../../services/character.js";
import story from "../../services/story.js";
//

/* Elements */
import FormBubble from "./Form.vue";
import TextBubble from "./Text.vue";
//

/* Data */
import { dataFile } from "../../js/blocs/declarations/declarationsData";
//

export default {
  data() {
    return {
      select: this.choice,
      componentKey: JSON.parse(localStorage.getItem(`NUMBERSTEPS`))
        ? JSON.parse(localStorage.getItem(`NUMBERSTEPS`))
        : 0
    };
  },

  props: [`choice`],

  components: {
    FormBubble,
    TextBubble
  },

  methods: {
    /*
     * Refresh components
     */
    forceRerender() {
      this.componentKey += 1;
      localStorage.setItem(`NUMBERSTEPS`, JSON.stringify(this.componentKey));
    },
    //

    /*
     * Load the next frame
     */
    selectComponent() {
      return dataFile.story[this.choice.frame].type;
    },
    //

    /*
     * Send select next frame
     */
    sendFrame(nextFrame) {
      this.forceRerender();
      this.$emit(`sendFrame`, nextFrame);
    }
    //
  },

  computed: {}
};
//
</script>
