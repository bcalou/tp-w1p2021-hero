<template>
  <div class="terre">
    <div class="bloc_questions">
        <h1>{{ title }}</h1>
      <div class="people_meca">
        <img src="../assets/images/soucoupe2.png" alt="" class="personnage">
        <div class="noboostbutton">
          <router-link class="button3" to="/loose">Attaquer</router-link>
          <router-link class="button3" to="/terre6">Fuir</router-link>
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
      title: data.steps[10].title
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>