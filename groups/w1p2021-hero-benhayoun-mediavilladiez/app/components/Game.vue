<template>
  <div class="game">  
    <div class="step">
      <div class="step_title">
      <h3>{{ step.title }}</h3>
      </div>
    <ul>
      <li div class="choice" v-for="action in step.actions" v-bind:action="action" v-bind:key="action.title">
        <router-link :to="action.to.toString()">{{ action.title }}</router-link>
      </li>
    </ul>
    </div>
  </div>
</template>


<script>
import game from "../data.json";

export default {
  data: function() {
    return {
      step: this.getStep()
    };
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

