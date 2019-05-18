<template>
  <div class="big-header">
    <h1>Répondre à la question</h1>
    <br />
    <input></input>
    <router-link 
      class="button" 
      to="/game/1">Valider</router-link>
    <!-- <router-link 
      class="button" :to="/game/1">
      Répondre</router-link> -->
  </div>
</template>

<script>
import data from '../assets/data.json';
import Game from '../components/Game';

export default {
    computed: {
      id() {
        return this.$route.params.id;
      },
      goto() {
        return data[this.id].goto;
      }
  }
}
</script>