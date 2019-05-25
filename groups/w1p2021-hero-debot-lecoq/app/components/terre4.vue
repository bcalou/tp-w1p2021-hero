<template>
  <div class="garage">
     <h1>{{ title }}</h1>
      <article class="articles_garages">
        <div class="garage_choice">
            <img src="../assets/images/Mousseux.png" alt="" class="personnage">
        </div>
        <div class="blocs_garages">
          <div class="bloc_garage1">
              <router-link class="button" to="/loose"><img src="../assets/images/garage2.jpg" alt="" class="garage2"></router-link><br><br>
              <h2>Mechanic Planet</h2>
          </div>
          <div class="bloc_garage2">
            <router-link class="button" to="/terre5"><img src="../assets/images/garage3.png" alt="" class="garage3"></router-link><br><br>
            <h2>Wheel Mechanic</h2>
          </div>
        </div>
      </article>
</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      title: data.steps[5].title,
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>