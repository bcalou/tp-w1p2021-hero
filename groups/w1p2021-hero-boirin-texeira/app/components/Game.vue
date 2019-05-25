<template>

  <div
    class="big-header"
    :style="{background: 'url(' + background + ')' , backgroundSize: 'cover'}"
  >

    <audio id="soundTrack" src="../assets/audio.mp3" autoplay></audio>

    <div class="question">
      <h1 v-if="$route.params.id">{{ step.title }}</h1>
    </div>
    <ul v-if="$route.params.id != 9 && $route.params.id">
      <div class="choices">
        <li
          v-for="action in step.actions"
          v-bind:action="action"
          v-bind:key="action.title"
          @click="saveStep"
        >
          <router-link class="button" :to="action.to.toString()">{{ action.title }}</router-link>
        </li>
      </div>
    </ul>
    <ul v-if="$route.params.id == 9 && male == true && $route.params.id">
      <div class="choices">
        <li v-for="male in step.males" v-bind:male="male" v-bind:key="male.title" @click="saveStep" @click="redirectWin">
          <router-link class="button" :to="male.to.toString()">{{ male.title }}</router-link>
        </li>
      </div>
    </ul>
    <ul v-else-if="$route.params.id == 9 && male == false && $route.params.id">
       <div class="questions">
      <li
        v-for="action in step.actions"
        v-bind:action="action"
        v-bind:key="action.title"
        @click="saveStep">
        <router-link class="button" :to="action.to.toString()">{{ action.title }}</router-link>
      </li>
    </ul>
    <router-link class="button" v-if="$route.params.id > 100" to="/loose">Accéder aux statistiques</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import game from "../data";
import Sexe from "../sexe";

export default {
  data: function() {
    return {
      step: this.getStep()
    };
  },
  computed: {
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
    },
    saveStep() {
      let stepId = this.$route.params.id;
      localStorage.setItem("step", stepId);
      console.log("ok");
    }
  }
};
</script>


