<template>
  <div class="big-header">
    <h1>Aventure {{ id }} - {{ message }}</h1>
    <br />
    <router-link 
      v-for="(choice, index) in choices" 
      :key="index" 
      class="button" 
      :to="'/game/' + choice.goto">
        {{ choice.text }}
    </router-link>
  </div>
</template>

<script>
import data from '../assets/data.json';

export default {
    computed: {
      id() {
        return this.$route.params.id
      },
      message() {
        return data[this.id].message;
      },
      choices() {
        return data[this.id].choices;
      }
    }
};
</script>