<template>
  <div class="big-header">
    <h1> Je suis un...</h1>
    <br>

    <div class="characters">
    <Character v-on:click.native="saveCharacter(character)" :class="character.class" v-for="character in characters" v-bind:character="character" :key="character.name">
    </Character>
    </div>

    <br>
  </div>
</template>

<script>
import Character from "./Character.vue";
import game from '../data.js'
import gameService from '../services/gameService';

export default {
  data() {
    return {
      characters: game.characters
    };
  },
  methods: {
    saveCharacter(character) {

      this.$router.push({path: '/game/1'})
      
      gameService.stats = character.stats;
      gameService.maxHealth = character.stats.health;
      gameService.save();
    }
  },
  components: {
    Character
  }
};
</script>
