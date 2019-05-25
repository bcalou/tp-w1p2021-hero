<template>
  <div class="big-header2">
     <div>
      <img src="../assets/images/Mousseux.png" alt="" class="personnage">
    </div>
    <div class="bloc_questions">
        <h1>{{ title }}</h1> <br>
      <div class="buttons-terre">
        <router-link class="buttonsboost" to="/yesboost">Oui</router-link>
        <router-link class="buttonsboost" to="/Noboost">Non</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      title: data.steps[4].title,
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>
