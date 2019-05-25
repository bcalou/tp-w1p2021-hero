<template>
  <div class="big-header">
    <div class="bloc_questions">
         <h1>{{ title2 }}</h1> <br>
         <router-link class="button2" to="/terre4">Ok</router-link>
    </div>
        <img src="../assets/images/capitaine2.png" alt="">
  </div>
  

</template>

<script>
import data from '../data.js';

export default {
  data() {
    return {
      title2: data.steps[5].title2,
    }
  },
  methods: {
    setCharacter(value) {
      this.title = value;
    }
  }
}
</script>