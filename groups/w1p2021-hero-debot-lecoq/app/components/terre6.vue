<template>
  <div class="terre">
    <div class="bloc_questions">
        <h1>{{ message }}</h1>
      <div class="people_meca">
        <img src="../assets/images/Archirford.png" alt="" class="personnage">
        <router-link class="button2" to="/terre1">Ok</router-link>
      </div>
    </div>
  </div>
  

</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: "Super . Je suis fière de vous. Votre boost est réparé ."
    };
  },
  methods: {
    handleClick() {
      countService.increment();
    }
  }
};
</script>