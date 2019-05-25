<template>
  <div class="terre">
     <div>
      <img src="../assets/images/Mousseux.png" alt="" class="personnage">
    </div>
    <div class="bloc_questions">
        <h1>{{ step }}</h1> <br>
      <div class="buttons-terre">
        <router-link class="buttonsboost" to="/terre2">Oui</router-link>
        <router-link class="buttonsboost" to="/terre3">Non</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import data from '../data.js';

export default {
  data() {
    return {
      step: data.steps[4].title,
    }
  },
  computed: {
    title() {
      return data.steps[this.id].title;
    }
  },
  methods: {
    setCharacter(value) {
      this.id = 1;
    },
  },
  watch: {
    '$route' (to, from) {
      this.step =data.intro[this.$route.params.id]
    }
  }
}
</script>