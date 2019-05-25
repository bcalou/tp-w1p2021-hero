<template>
  <div class="big-header background__one">
    <div class="question">
      <p>Voici tes statistiques : &nbsp;</p>
      <br>
      <p>Tu as survécu pendant {{step}} étapes</p>
    </div>
  </div>
</template>

<script>
import game from "../data";
import Sexe from "../sexe";

export default {
  data() {
    return {
      step: localStorage.getItem("step") - 100
    };
  },
  computed: {
    step() {
      return this.getStep();
    },
    male() {
      return Sexe.male;
    },
    background() {
      return this.step.background;
    }
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },

  methods: {
    getStep() {
      return game.steps.find(step => {
        return step.id === parseInt(this.$route.params.id, 10);
      });
    }
  }
};
</script>


