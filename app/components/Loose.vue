<template>
  <div class="big-header">
    <h1>Tu as perdu !</h1>
    <br />
    <!-- <input></input> -->
    <router-link 
      class="button" 
      to="/game/1">Retour</router-link>
    <!-- <router-link 
      class="button" :to="'/game/ + goto'">
      Répondre</router-link> -->
  </div>
</template>

<script>
import data from '../assets/data.json';
import Game from '../components/Game.vue';
import audioCount from '../services/audioCount';

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