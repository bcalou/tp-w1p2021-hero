<template>
  <div class="garage">
    <div class="bloc_questions">
        <h1>{{ title2 }}</h1>
      <div class="lightes">
        <img src="../assets/images/red_light.png" alt="" class="light">
        <div class="buttones">
          <router-link class="button2" to="/loose">Passer</router-link>
          <router-link class="button2" to="/win">Arrêter</router-link>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      title2: data.steps[7].title2,
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>