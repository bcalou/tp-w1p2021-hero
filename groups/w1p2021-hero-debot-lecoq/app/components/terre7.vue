<template>
  <div class="terre">
    <div class="bloc_questions">
        <h3>{{ alerte }}</h3><br>
        <router-link class="button2" to="/Home">Ok</router-link><br>
    </div>
    <div>
      <img src="../assets/images/Troueur.png" alt="" class="personnage">
    </div>
  </div>
  

</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      alerte: data.steps[6].actions[0].alerte,
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>