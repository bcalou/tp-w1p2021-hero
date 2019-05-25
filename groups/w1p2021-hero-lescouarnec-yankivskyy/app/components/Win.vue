<template>
  <div class="big-header">
    <img v-bind:src="img" alt="Vault">
    <h1>Win</h1>
    <br />
    <p class="title">{{ title }}</p>
    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
import json from '../data.js'
export default {
  computed: {
      id(){
        return this.$route.params.id;
      },
      title() {
        const id = this.$route.params.id;
        const step = json[id];
        if (!step)
          return ''; // FIXME handle unexisting json key

        return step.title;
      },

      img() {
        const id = this.$route.params.id;
        const step = json[id];
        return step.img;
      }
   }  
};
</script>