<template>
  <div class="garage">
    <div class="bloc_questions">
        <h1>{{ title }}</h1>
      <div class="people_meca">
        <img src="../assets/images/Archirford.png" alt="" class="personnage">
        <router-link class="button2" to="/terre8">Ok</router-link>
      </div>
    </div>
  </div>
  

</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      title: data.steps[7].title
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>